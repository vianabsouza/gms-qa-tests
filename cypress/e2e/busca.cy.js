const { afterEach } = require("mocha")

describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Validação de busca de filmes com sucesso', () => {
    cy.retornarFilmesComSucesso('Matrix')
  })

  it('Validação de busca de filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes[0].titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain', filmes[0].titulo)
    })
  })

  it('Validação de busca de filmes com sucesso da lista inteira', () => {
    cy.fixture('filmes').each((filmes) => {
      cy.get('#search-input').clear().type(filmes.titulo)
      cy.get('#search-button').click({force: true})
      cy.get('#results-section').should('contain', filmes.titulo)
    })
  })

  it('Validação de filmes com palavra-chave válida em tempo real', () => {
    cy.retornarFilmesTempoReal('Inception')
  })

  it('Validação de filmes sem resultados', () => {
    cy.retornarFilmesSemResultados('A Viagem de Chihiro')
    cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
  })

  it('Validação ao limpar busca de filmes', () => {
    cy.retornarLimparBusca('A Viagem]')
  })
})
