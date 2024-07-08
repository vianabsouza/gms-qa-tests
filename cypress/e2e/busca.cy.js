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
