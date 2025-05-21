describe('Transações', () => {
  it('Cadastrar uma entrada', () => {
    cy.visit('https://my-devfinances.netlify.app/#')

    criarTransacao('Freelance','540,90')
    cy.get('tbody tr td.description').should('have.text','Freelance')
    cy.get('tbody tr td.income').should('contain.text','540,90')
    
  })

  it('Cadastrar uma saída',()=>{

    cy.visit('https://my-devfinances.netlify.app/#')
    criarTransacao('Cinema',-45)
    cy.get('tbody tr td.description').should('have.text','Cinema')

  })


function criarTransacao(descricao, valor){

  cy.get('.button.new-transaction').click()
  cy.get('#form').should('contain.text','Nova Transação')
  cy.get('#description').type(descricao)
  cy.get('#amount').type(valor)
  cy.get('#date').type('2025-05-21')
  cy.contains('button', 'Salvar').click()

  }
})