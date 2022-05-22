describe('teste', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com.br');
    })
    it('teste pesquisa', ()=>{
        cy.get('.gLFyf').type('testando cypress')
        cy.get('.FPdoLc > center > .gNO89b').click()
    })
        
})
