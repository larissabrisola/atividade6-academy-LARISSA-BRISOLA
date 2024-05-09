import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ListUsers from "../pages/listUsers.page";

let listUsers = new ListUsers()

Given('usuário está na tela inicial', ()=>{
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/')
    cy.url().should('eq', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
})

When('não existir usuários cadastrados', () => {
    cy.intercept("GET", "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users", {
      statusCode: 200,
      body: [],
    }).as("emptyList");

  });


Then('um texto informando que não existe usuários cadastrados deverá ser exibido com opção de cadastrar um novo usuário', ()=>{
    cy.wait("@emptyList");
    cy.get("h3")
    .contains("Ops! Não existe nenhum usuário para ser exibido.")
    .should("be.visible");
    cy.get("p").contains("Cadastre um novo usuário").should("be.visible");
})


