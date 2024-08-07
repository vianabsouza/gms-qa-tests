// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preencherCadastroCamposObrigatorios', (nome, sobrenome, email, senha) => {
  cy.get('#signup-firstname').type(nome)
  cy.get('#signup-lastname').type(sobrenome)
  cy.get('#signup-email').type(email)
  cy.get('#signup-password').type(senha)
  cy.get('#signup-button').click()
 })

Cypress.Commands.add('preencherCadastroCompleto', (nome, sobrenome, email, telefone, senha) => {
  cy.get('#signup-firstname').type(nome)
  cy.get('#signup-lastname').type(sobrenome)
  cy.get('#signup-email').type(email)
  cy.get('#signup-phone').type(telefone)
  cy.get('#signup-password').type(senha)
  cy.get('#signup-button').click()
 })

 Cypress.Commands.add('preencherEmailDuplicado', (nome, sobrenome, email, telefone, senha) => {
  cy.get('#signup-firstname').type(nome)
  cy.get('#signup-lastname').type(sobrenome)
  cy.get('#signup-email').type(email)
  cy.get('#signup-phone').type(telefone)
  cy.get('#signup-password').type(senha)
  cy.get('#signup-button').click()
 })

 Cypress.Commands.add('preencherEmailInvalido', (nome, sobrenome, email, telefone, senha) => {
  cy.get('#signup-firstname').type(nome)
  cy.get('#signup-lastname').type(sobrenome)
  cy.get('#signup-email').type(email)
  cy.get('#signup-phone').type(telefone)
  cy.get('#signup-password').type(senha)
  cy.get('#signup-button').click()
 })

 Cypress.Commands.add('preencherSemCamposObrigatorios', (telefone) => {
  cy.get('#signup-phone').type(telefone)
  cy.get('#signup-button').click()
 })

 Cypress.Commands.add('preencherSenhaFraca', (nome, sobrenome, email, telefone, senha) => {
  cy.get('#signup-firstname').type(nome)
  cy.get('#signup-lastname').type(sobrenome)
  cy.get('#signup-email').type(email)
  cy.get('#signup-phone').type(telefone)
  cy.get('#signup-password').type(senha)
  cy.get('#signup-button').click()
 })

 Cypress.Commands.add('preencherSenhaVazia', (nome, sobrenome, email, telefone, senha) => {
  cy.get('#signup-firstname').type(nome)
  cy.get('#signup-lastname').type(sobrenome)
  cy.get('#signup-email').type(email)
  cy.get('#signup-phone').type(telefone)
  if (senha !== '') {
    cy.get('#signup-password').type(senha)
  }
  cy.get('#signup-button').click()
 })

 Cypress.Commands.add('retornarFilmesComSucesso', (filme) => {
  cy.get('#search-input').type(filme)
  cy.get('#search-button').click()
  cy.get('#results-section').should('contain', filme)
})

Cypress.Commands.add('retornarFilmesTempoReal', (filme) => {
  cy.get('#search-input').type(filme)
})

Cypress.Commands.add('retornarFilmesSemResultados', (filme) => {
  cy.get('#search-input').type(filme)
  cy.get('#search-button').click()
})

Cypress.Commands.add('retornarLimparBusca', (filme) => {
  cy.get('#search-input').type(filme)
  cy.get('#clear-button').click()
})