import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import UpdateUserPage from "../pages/updateUser.page";
import { faker } from "@faker-js/faker";


userPage = new UpdateUserPage();
beforeEach(() => {
  cy.intercept(
    "GET",
    "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
    {
      statusCode: 200,
      fixture: "userSearch.json",
    }
  ).as("userCadastrado");

  cy.intercept(
    "GET",
    "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/9fa85f64-5717-4562-b3fc-2c963g6af86",
    {
      statusCode: 200,
      body: {
        id: "9fa85f64-5717-4562-b3fc-2c963g6af86",
        name: "sandydrinha",
        email: "sandydrinha@example.com",
        createdAt: "2024-04-28T20:43:51.446Z",
        updatedAt: "2024-04-28T20:43:51.446Z",
      },
    }
  ).as("editarUsuario");

  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");

  cy.wait("@userCadastrado");
  cy.get(".jyUeXb > .sc-feUZmu > #userDataDetalhe").click();
  cy.wait("@editarUsuario");

});

Given(
  "que usuário está na tela de atualizar informações de um determinado usuário",
  () => {
    //1ª etapa é um intercept dos /users
   cy.url().should('eq', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/9fa85f64-5717-4562-b3fc-2c963g6af86')
  }
);

When("clicar no botão Editar", () => {
  // Ao clicar no botao editar, terá um intercept para retornar os dados do usuario
  userPage.clickButtonEdit();

});

When("preencher o campo nome com dados válidos", () => {
    userPage.clearUserName()
    userPage.typeUserName(faker.person.firstName())
    
});

When("preencher o campo email com dados válidos", () => {
    userPage.clearUserEmail()
    userPage.typeUserEmail(faker.internet.email())
});
When("clicar no botão Salvar com sucesso", () => {
    
    cy.intercept('PUT','https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/9fa85f64-5717-4562-b3fc-2c963g6af86',{
        statusCode:200,
        body: {
            id: "9fa85f64-5717-4562-b3fc-2c963g6af86",
            name: "sandydrinha",
            email: "sandydrinha@example.com",
            createdAt: "2024-04-28T20:43:51.446Z",
            updatedAt: "2024-04-28T20:43:51.446Z",
        },
    }).as("salvaUsuario")
    
    userPage.clickButtonSave()

    cy.wait("@salvaUsuario")
});

When('clicar no botão Salvar', ()=>{
    userPage.clickButtonSave()
})
When("preencher o campo email com dados válidos de 60 caracteres", () => {
    let longEmail = faker.string.alpha(50) 
    userPage.clearUserEmail()
    userPage.typeUserEmail(longEmail + "@teste.com") 
});

When("preencher o campo nome com dados válidos de 100 caracteres", () => {
    let longName = faker.string.alpha(100) 
    userPage.clearUserName()
    userPage.typeUserName(longName)
});

When("clicar no botão Cancelar", () => {
    userPage.clickButtonCancel()
});
When("clicar no botão Salvar - email already in use", () => {
    
    cy.intercept('PUT','https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users/9fa85f64-5717-4562-b3fc-2c963g6af86',{
        statusCode:422,
        body: 
        {error: "E-mail already in use."}
,
    }).as("salvaUsuario")
    
    userPage.clickButtonSave()

    cy.wait("@salvaUsuario")
});

When("preencher o campo email com um email já cadastrado", () => {
    userPage.clearUserEmail()
    userPage.typeUserEmail('lala@gmail.com')
});

When("preencher o campo nome {string}", (string) => {
    userPage.clearUserName()
    userPage.typeUserName(string)
});

When("preencher o campo email {string}", (string) => {
    userPage.clearUserEmail()
    userPage.typeUserEmail(string)
});

Then("um texto informando que o formato de email é inválido deve ser exibido",() => {
    cy.contains('span', 'Formato de e-mail inválido').should('be.visible')
  }
);

Then('um texto informando que o formato de nome é inválido deve ser exibido', ()=>{
    cy.get('#root > div.sc-eldPxv.gkYUqH > div > form > div.sc-jEACwC.jCZyHj > span').should('contain', 'Formato do nome é inválido.').and('be.visible')
})
Then("um texto informando o minimo de caracteres de nome deve ser exibido",() => {
    cy.get('#root > div.sc-eldPxv.gkYUqH > div > form > div:nth-child(5) > span').should('be.visible').and('contain', 'Informe pelo menos 4 letras para o nome.')
}
);
Then("um texto informando o minimo de caracteres do email deve ser exibido",() => {
    cy.get('.sc-cPiKLX').should('be.visible').and('contain', 'Informe pelo menos 4 caracteres para o e-mail.')
}
);
Then("um texto informando o limite de caracteres do email deve ser exibido",() => {
    cy.get('.sc-cPiKLX').should('be.visible').and('contain', 'Informe no máximo 60 caracteres para o e-mail')
}
);

Then("um texto informando o limite de caracteres do nome deve ser exibido",() => {
    cy.get('#root > div.sc-eldPxv.gkYUqH > div > form > div:nth-child(5)').should('be.visible').and('contain', 'Informe no máximo 100 caracteres para o nome')
}
);

Then("um modal informando que email já é utilizado deverá ser exibido",() => {
 cy.get('#root > div.sc-eBMEME.kIxLSF').should('be.visible').and('contain', 'Este e-mail já é utilizado por outro usuário.').and('contain', 'Cancelar')
});
Then("as informações serão atualizadas, uma mensagem de sucesso será exibida e o usuário deve ser redirecionado para a página inicial",() => {

    cy.get('.go2072408551').should('be.visible').and('contain', 'Informações atualizadas com sucesso!')
    cy.url().should('eq', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')}
);

Then("os campos estarão indisponiveis", () => {
    cy.get('#userName').should('be.disabled')
    cy.get('#userEmail').should('be.disabled')
});

Then("não deve ser possivel alterar o campo ID", () => {
    cy.get('#root > div.sc-eldPxv.gkYUqH > div > form > input:nth-child(2)').should('be.disabled')
});

Then("o usuário deve ser redirecionado para a página inicial", () => {
    cy.url().should('eq', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')}
);

