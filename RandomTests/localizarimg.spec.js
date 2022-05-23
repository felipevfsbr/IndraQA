///<reference types='cypress' />
describe('teste de localizacao de imagem', () => {
    it('inputs', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/links')
        ///clicando no link e verificando texto.
        cy.get('body > div.row > div.col.s9 > div:nth-child(3) > div:nth-child(1) > a')
            .should('have.text', 'Ok 200 - Sucess').click()
        ///Descobrir se o texto aparece.
        cy.get('body > div.row > div.col.s9 > div:nth-child(2) > div > h5')
            .should('have.text', 'Success!!')
        ///Localizar se a imagem está na pagina.
        cy.get('div[class="center"]').find("img").should('be.visible');
        })
})
