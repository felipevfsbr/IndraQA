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
})