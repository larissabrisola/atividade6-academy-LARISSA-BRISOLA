import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


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


When('existir mais que 6 usuários cadastrados', ()=>{
  cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', {
    statusCode: 200, 
    fixture: 'twentyUsers.json'
  }).as('vinteUsuariosCadastrados')

  cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')

})

When('existir 6 usuários cadastrados', ()=>{
  cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', {
    statusCode: 200, 
    fixture: 'sixUsers.json'
  }).as('sixUsers')

  cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')

})

Then('a paginação deve estar disponinel', ()=>{
  cy.wait('@vinteUsuariosCadastrados')
  cy.get('#paginacaoAtual').should('be.visible').and('contain', '1 de 4')
  cy.get('#paginacaoVoltar').should('be.disabled')
  cy.get('#paginacaoProximo').should('be.enabled')
})

When('clicar no botão de Próximo', ()=>{
  cy.get('#paginacaoProximo').click()
})

Then('deve ser capaz ir para a proxima página', ()=>{
  cy.get('#paginacaoAtual').should('be.visible').and('contain', '2 de 4')
  cy.get('#paginacaoVoltar').should('be.enabled')
  cy.get('#paginacaoProximo').should('be.enabled')
})

Then('deve ser capaz de voltar a página Anterior', ()=>{
  cy.get('#paginacaoVoltar').should('be.enabled')
  cy.get('#paginacaoProximo').should('be.enabled')
})

Then('a paginação não deve estar disponivel', ()=>{
  cy.wait('@sixUsers')
  cy.get('#paginacaoAtual').should('be.visible').and('contain', '1 de 1')
  cy.get('#paginacaoVoltar').should('be.disabled')
  cy.get('#paginacaoProximo').should('be.disabled')
})

Then('não deve ser possivel clicar no botão de proximo', ()=>{
  cy.get('#paginacaoProximo').should('be.disabled')
})

When('clicar no botão de próximo 3 vezes', ()=>{
  cy.get('#paginacaoProximo').click()
  cy.get('#paginacaoProximo').click()
  cy.get('#paginacaoProximo').click()

})