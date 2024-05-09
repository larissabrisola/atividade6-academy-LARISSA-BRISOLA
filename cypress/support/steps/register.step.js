import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import RegisterPage from "../pages/register.page";
const registerPage = new RegisterPage();




Given("usuário está na tela de cadastro", () => {
  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/novo");
  cy.url().should('eq', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/novo')
});

// when 
When("informar um nome válido", () => {
  registerPage.typeName(faker.person.jobTitle());
});
When("informar um email válido", function () {
  registerPage.typeEmail(faker.internet.email());
});
When("informar um nome {string}", (string) => {
  registerPage.typeName(string);
});
When("informar um email {string}", (string) => {
  registerPage.typeEmail(string);
});
When("confirmar", () => {
  registerPage.clickButtonSalvar();
});
When("informar um e-mail já utilizado", function () {
    cy.intercept('POST', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', {
        statusCode: 422, 
        body: {
            "error": "User already exists."
          }
    })
    registerPage.typeEmail("lalalala@gmail.com");
});
When('clicar para voltar a página inicial', ()=>{
  registerPage.clickBackToHome();
})
When('informar um nome com 100 caracteres', ()=>{
  let longName = faker.string.alpha(100) 

 registerPage.typeName(longName)
})
When('informar um email com 60 caracteres', ()=>{
  let longEmail = faker.string.alpha(50) 
  registerPage.typeEmail(longEmail + "@teste.com") 

})

// then 
Then('devo ser redirecionado para página inicial', ()=>{
  cy.url().should('eq', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
})
Then("o usuário será cadastrado e uma mensagem de sucesso será exibida", () => {
    cy.get(".go2344853693");
    cy.contains("Usuário salvo com sucesso").should("be.visible");
});
Then("uma mensagem informando o limite de caracteres do nome deverá ser exibida",() => {
    cy.contains("Informe no máximo 100 caracteres para o nome").should(
      "be.visible"
    );
  }
);
Then("uma mensagem informando o limite de caracteres do email deverá ser exibida",() => {
    cy.contains("Informe no máximo 60 caracteres para o e-mail").should(
      "be.visible"
    );
  }
);
Then("uma mensagem informando que o email já é utilizado deverá ser exibida",() => {
    cy.get("#root > div.sc-eBMEME.kIxLSF > div > div")
      .contains("Este e-mail já é utilizado por outro usuário.")
      .should("be.visible");
  }
);
Then('uma mensagem informando que o campo nome é obrigatório deverá ser exibida', ()=>{
    cy.contains("O campo nome é obrigatório").should("be.visible");
});
Then('uma mensagem informando que o campo email é obrigatório deverá ser exibida', ()=>{
    cy.contains("O campo e-mail é obrigatório").should("be.visible");
});
Then('uma mensagem informando que todos os campos são obrigatórios deverá ser exibida', ()=>{
    cy.contains("O campo nome é obrigatório").should("be.visible");
    cy.contains("O campo e-mail é obrigatório").should("be.visible");
})
Then("uma mensagem informando que o campo email está inválido",() => {
    cy.contains("Formato de e-mail inválido").should(
      "be.visible"
    );
  }
);
Then("uma mensagem informando que o campo nome está inválido",() => {
    cy.contains("Formato do nome é inválido").should(
      "be.visible"
    );
  }
);
Then("uma mensagem informando o minimo de caracteres do nome deverá ser exibida",() => {
    cy.contains("Informe pelo menos 4 letras para o nome.").should(
      "be.visible"
    );
  }
)
Then("uma mensagem informando o minimo de caracteres do email deverá ser exibida",() => {
    cy.contains("Informe pelo menos 4 caracteres para o e-mail.").should(
      "be.visible"
    );
  }
);