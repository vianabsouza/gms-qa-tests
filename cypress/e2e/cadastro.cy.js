/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Validação de cadastro de campos obrigatórios', () => {
    let email = `barbara${Date.now()}@teste.com`
    cy.preencherCadastroCamposObrigatorios('Barbara', 'Viana', email, 'Teste@2020')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it('Validação de cadastro de todos os campos', () => {
    let email = `barbara${Date.now()}@teste.com`
    cy.preencherCadastroCompleto('Barbara', 'Viana', email, '11947722553', 'Teste@2020')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it('Validação de cadastro de email duplicado', () => {
    cy.preencherEmailDuplicado('Barbara', 'Viana', 'barbara2@teste.com', '11955225522', 'Test&2020')
    cy.get('#signup-response').should('contain' , 'Este email já está cadastrado.')
  })

  it('Validação do formato do email inválido', () => {
    cy.preencherEmailInvalido('Barbara', 'Viana', 'barbara@', '11947722553', 'Teste@2020')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('Validação de envio sem preencher campos obrigatórios', () => {
    cy.preencherSemCamposObrigatorios('11955225522')
    cy.get('#signup-response').should('contain', 'Nome não pode estar vazio')
  })

  it('Validação de bloqueio de senha fraca ', () => {
    let email = `barbara${Date.now()}@teste.com`
    cy.preencherSenhaFraca('Barbara', 'Viana', email, '11947722553', '123')
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })

  it.only('Validação de senha vazia ', () => {
    let email = `barbara${Date.now()}@teste.com`
    cy.preencherSenhaVazia('Barbara', 'Viana', email, '11947722553', '')
    cy.get('#signup-response').should('contain' , 'Senha não pode estar vazia')
  })
})