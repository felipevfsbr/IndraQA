///<reference types='cypress' />
describe('teste de botoes', () => {
    it('validar botoes', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
        cy.get('#teste').click()
            .should('have.id', 'teste');
        cy.get('#div1 > h5')
            .should('have.text', 'Você Clicou no Botão!')
        cy.get('.btn-floating').click()
        cy.get('#div2 > h5')
            .should('have.text', 'Você Clicou no Botão!')
    });
    it('floating', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
        cy.get('.btn-floating').click()
        cy.get('#div2 > h5')
            .should('have.text', 'Você Clicou no Botão!')
    })
    it('flat', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
        cy.get('.row > .waves-teal').click
        cy.get('#div3 > h5')
            .should('have.text', 'Você Clicou no Botão!')   
    })
    it('submit', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
        cy.get(':nth-child(6) > :nth-child(1) > .row > .btn').click
        cy.get('#div4 > h5')
            .should('have.text', 'Você Clicou no Botão!')   
    })
    it('disable', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/botoes');
        cy.get(':nth-child(7) > .s6 > .row').click
    
    })
    it('input de texto', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield')
        cy.get('#first_name').type('Felipe')
            .should('have.value', 'Felipe');
    });
    it('input de texto2', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield')
        cy.get('#last_name').type('Souza')
            .should('have.value', 'Souza');
    });
    it('input de pwd', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield')
        cy.get('#password').type('senha')
            .should('have.value', 'senha');
    });
    it('input de email', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield')
        cy.get('#email').type('felipevfsbr@gmail.com')
            .should('have.value', 'felipevfsbr@gmail.com');
    });
})
