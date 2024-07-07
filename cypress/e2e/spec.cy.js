/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

 it.only('Deve fazer o cadastro de campos obrigatórios', () => {
    let email = `barbara${Date.now()}@teste.com`
    cy.get('#signup-firstname').type('Barbara')
    cy.get('#signup-lastname').type('Viana')
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type('')
    cy.get('#signup-password').type('Test&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de todos os campos', () => {

     cy.get('#signup-firstname').type('Barbara')
     cy.get('#signup-lastname').type('Viana')
     cy.get('#signup-email').type('barbara2@teste.com')
     cy.get('#signup-phone').type('11955225522')
     cy.get('#signup-password').type('Test&2020')
     cy.get('#signup-button').click()
     cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
   })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Validação de cadastro de email duplicado', () => {
    cy.get('#signup-firstname').type('Barbara')
    cy.get('#signup-lastname').type('Viana')
    cy.get('#signup-email').type('barbara2@teste.com')
    cy.get('#signup-phone').type('11955225522')
    cy.get('#signup-password').type('Test&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Validação do formato do email inválido', () => {
    cy.get('#signup-firstname').type('Barbara')
    cy.get('#signup-lastname').type('Viana')
    cy.get('#signup-email').type('barbara@')
    cy.get('#signup-password').type('Test&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })
})

describe('US-012-Funcionalidade: ', () => {
  it('Validação de envio sem preencher campos obrigatórios', () => {
    cy.get('#signup-phone').type('11955225522')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Validação de bloqueio de senha fraca ', () => {
      cy.get('#signup-firstname').type('Barbara')
      cy.get('#signup-lastname').type('Viana')
      cy.get('#signup-email').type('barbara3@teste.com')
      cy.get('#signup-phone').type('11955225522')
      cy.get('#signup-password').type('123')
      cy.get('#signup-button').click()
      cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Validação de senha vazia ', () => {
      cy.get('#signup-firstname').type('Barbara')
      cy.get('#signup-lastname').type('Viana')
      cy.get('#signup-email').type('barbara3@teste.com')
      cy.get('#signup-phone').type('11955225522')
      cy.get('#signup-password').type('')
      cy.get('#signup-button').click()
      cy.get('#signup-response').should('contain' , 'cannot accept an empty string. You need to actually type something.')
    })
})

describe('US-001-Funcionalidade: Busca de filmes', () => {
  it('Validação de filmes com palavra-chave válida em tempo real', () => {
    cy.get('#search-input').type('Inception')
    cy.get('#search-button').click()
  })
})

describe('US-001-Funcionalidade: Busca de filmes', () => {
  it('Validação de filmes sem resultados', () => {
    cy.get('#search-input').type('A Viagem de Chihiro')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
  })
})

describe('US-001-Funcionalidade: Busca de filmes', () => {
  it('Validação ao limpar busca de filmes', () => {
    cy.visit('http://192.168.15.25:8080/')
    cy.get('#search-input').type('A Viagem de Chihiro')
    cy.get('#search-button').click()
    cy.get('#clear-button').click()
  })
})