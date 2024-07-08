/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    let email = `barbara${Date.now()}@teste.com`
    cy.preencherCadastroCamposObrigatorios('Barbara', 'Viana', email, 'Teste@2020')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve fazer o cadastro de todos os campos', () => {
    let email = `barbara${Date.now()}@teste.com`
    cy.preencherCadastro('Barbara', 'Viana', email, '11947722553', 'Teste@2020')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validação de cadastro de email duplicado', () => {
    cy.emailDuplicado('Barbara', 'Viana', 'barbara2@teste.com', '11955225522', 'Test&2020')
    cy.get('#signup-response').should('contain' , 'Este email já está cadastrado.')
  })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validação do formato do email inválido', () => {
    cy.emailInvalido('Barbara', 'Viana', 'barbara@', '11947722553', 'Teste@2020')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })
})

describe('US-012-Funcionalidade: ', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validação de envio sem preencher campos obrigatórios', () => {
    cy.envioSemCamposObrigatorios('11955225522')
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validação de bloqueio de senha fraca ', () => {
      let email = `barbara${Date.now()}@teste.com`
      cy.bloqueioSenhaFraca('Barbara', 'Viana', email, '11947722553', '123')
      cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    })
})

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validação de senha vazia ', () => {
    let email = `barbara${Date.now()}@teste.com`
    cy.bloqueioSenhaVazia('Barbara', 'Viana', email, '11947722553', '')
      cy.get('#signup-response').should('contain' , 'cannot accept an empty string. You need to actually type something.')
    })
})