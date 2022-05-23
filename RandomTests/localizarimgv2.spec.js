///<reference types='cypress' />
describe('teste de localizacao de imagem por CSS', () => {
    it('inputs', ()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/buscaelementos/links');
        ///clicando no link e verificando texto, com CSS.
        cy.contains('div[class="col s6 center"]', 'Ok 200 - Sucess').click()
        ///Descobrir se o texto aparece, com CSS.
        cy.contains('div[class="tamanhodiv2"]', 'Success!!')
            .should('contain.text', 'Success!!')
        ///Localizar se a imagem está na pagina.
        cy.get('div[class="center"]').find("img").should('be.visible');
        })
})
