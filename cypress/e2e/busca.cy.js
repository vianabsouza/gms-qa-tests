describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve buscar filmes com sucesso', () => {
    cy.filmesComSucesso('Matrix')
  })
})

describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve buscar filmes com sucesso de uma lista', () => {
    cy.fixture('filmes').then((filmes) => {
      cy.get('#search-input').type(filmes[0].titulo)
      cy.get('#search-button').click()
      cy.get('#results-section').should('contain', filmes[0].titulo)
    })
  })
})

describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve buscar filmes com sucesso da lista inteira', () => {
    cy.fixture('filmes').each((filmes) => {
      cy.get('#search-input').clear().type(filmes.titulo)
      cy.get('#search-button').click({force: true})
      cy.get('#results-section').should('contain', filmes.titulo)
    })
  })
})

describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validação de filmes com palavra-chave válida em tempo real', () => {
    cy.validacaoPavraChaveValidaTempoReal('Inception')
  })
})

describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validação de filmes sem resultados', () => {
    cy.validacaoFilmesSemResultados('A Viagem de Chihiro')
    cy.get('#results-section > p').should('contain', 'Filme não encontrado.')
  })
})

describe('US-001-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validação ao limpar busca de filmes', () => {
    cy.validacaoLimparBusca('A Viagem]')
  })
})
