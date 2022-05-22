///<reference types='cypress' />
describe('Google Tradutor Audio', () => {
    it('input nome', ()=>{
        cy.visit('https://translate.google.com.br/?hl=pt-BR');
        cy.get('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb.EjH7wc > div.AxqVh > div.OPPzxe > c-wiz.rm1UF.UnxENd > span > span > div > textarea').type('TestandoCypress');
        cy.xpath('/html/body/c-wiz/div/div[2]/c-wiz/div[2]/c-wiz/div[1]/div[2]/div[3]/c-wiz[1]/div[4]/div[2]/div/div[2]/div/span/button/div[3]').click()
        
    })
})