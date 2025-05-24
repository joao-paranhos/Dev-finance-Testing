describe('Transações', () => {



  beforeEach(() => {
    cy.visit('https://my-devfinances.netlify.app/#')
  });
  it('Cadastrar uma entrada', () => {
    

    criarTransacao('Freelance','540,90')
    cy.get('tbody tr td.description').should('have.text','Freelance')
    cy.get('tbody tr td.income').should('contain.text','540,90')
    
  })

  it('Cadastrar uma saída',()=>{

    criarTransacao('Cinema',-45)
    cy.get('tbody tr td.description').should('have.text','Cinema')

  })


  it.only ('Excluindo uma transação',()=>{

    criarTransacao('Mesada',100)
    criarTransacao('Freelance',100)
    // cy.contains('.description', 'Mesada').parent().find('img').click()
    //cy.get('tbody td.description').contains('Mesada').parent().find('img') --> Formas diferentes de capturar um elemento seja pelo pai usando o parent ou os irmãos usando o siblings
    cy.contains('.description', 'Mesada').siblings().find('img').click()
    cy.get('tbody tr').should("have.length", 1) // pegando o tamanho do elemento pai tbody que é referente a uma tabela
    
    


    


  })


function criarTransacao(descricao, valor){

  cy.get('.button.new-transaction').click()
  cy.get('#description').type(descricao)
  cy.get('#amount').type(valor)
  cy.get('#date').type('2025-05-21')
  cy.contains('button', 'Salvar').click()

  }
})