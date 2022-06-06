///<reference types='cypress' />
describe('Teste de Login', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');        
    });
    const usuarios = require('../../fixtures/usuarios.json');
    const invalidos = require('../../fixtures/invalidos.json');
    usuarios.forEach(usuario => {
        it(`Autenticação de Login ${usuario.valido}`, ()=>{
            cy.get('#txtUsername').should('be.visible').type(usuario.login);
            cy.get('#txtPassword').should('be.visible').type(usuario.pwd);
            cy.get('#btnLogin').should('be.visible').click();
            cy.wait(1000)
            cy.get('h1').should('contain.text', 'Dashboard');
    });
    });
    invalidos.forEach(invalido => {
        it(`Autenticação de Login ${invalido.invalido}`, ()=>{
            cy.get('#txtUsername').should('be.visible').type(invalido.login);
            cy.get('#txtPassword').should('be.visible').type(invalido.pwd);
            cy.get('#btnLogin').should('be.visible').click();
            cy.get('#spanMessage').should('contain.text', 'Invalid credentials');
            cy.wait(1000)
    });
    });
    it.only('Teste de Forgot Password', ()=>{
        //Pode falhar caso o administrador não tenha recebido uma requisição de troca de senha, vou pensar numa maneira melhor de resolver isso.
        cy.contains('a', 'Forgot your password?').should('contain.text', 'Forgot your password?').click();
        cy.get('#securityAuthentication_userName').should('be.visible').type('Admin');
        cy.get('#btnSearchValues').should('be.visible').click();
        // Tambem é possivel utilizar cy.get('.message').should('be.visible'), mas pensei ser útil realizar assert da palavra password na mensagem.
        cy.get('.message').then((pw)=> {
            assert.include(pw.text(), 'password');
        });
        cy.wait(1000);
        cy.get('.message').should('not.exist');
        cy.get('#btnCancel').click();
        cy.get('#logInPanelHeading').should('contain.text', 'LOGIN Panel');
        cy.wait(1000)
    });
});
