import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
  cy.intercept(
    "GET",
    "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
    {
      statusCode: 200,
      fixture: "userSearch.json",
    }
  ).as("userCadastrado");

  cy.visit("https://rarocrud-frontend-88984f6e4454.herokuapp.com/users");
});

When("preencher o campo de pesquisar usuário", () => {
  let nomeBusca = "roberto";
  cy.intercept(
    "GET",
    "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/search?value=" +
      nomeBusca,
    {
      statusCode: 200,
      body: [
        {
          id: "9fa85f69-5717-4562-b3fc-2c963f66af86",
          name: nomeBusca,
          email: nomeBusca+"@example.com",
          createdAt: "2024-02-28T20:43:51.446Z",
          updatedAt: "2024-02-28T20:43:51.446Z",
        },
      ],
    }
  ).as("buscaUser");

  cy.get(".sc-aXZVg.iYVcAu").type(nomeBusca);
  cy.wait("@buscaUser");
});

When("preencher o campo de pesquisar com dados não cadastrados", () => {
  cy.wait("@userCadastrado");

  let nomeBusca = "brother";
  cy.intercept(
    "GET",
    "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/search?value=" +
      nomeBusca,
    {
      statusCode: 200,
      body: [],
    }
  ).as("buscaUser");
  cy.get(".sc-aXZVg.iYVcAu").type(nomeBusca);
});

Then("um texto de usuário não encontrado deve ser exibido", () => {
  cy.get("h3")
    .contains("Ops! Não existe nenhum usuário para ser exibido.")
    .should("be.visible");
  cy.get("p").contains("Cadastre um novo usuário").should("be.visible");
});

//pendente
Then("devo ser capaz de visualizar as informações do usuário", () => {
  cy.get('#userData').should('be.visible').and('contain', 'Nome: ' ).and('contain', 'E-mail').and('contain', 'Ver detalhes')
});
