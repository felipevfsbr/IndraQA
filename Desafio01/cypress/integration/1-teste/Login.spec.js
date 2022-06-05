///<reference types='cypress' />
describe('Teste de Login', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');        
    });
    it('Autenticação de Login Válido', ()=>{
        cy.get('#txtUsername').should('be.visible').type('Admin');
        cy.get('#txtPassword').should('be.visible').type('admin123');
        cy.get('#btnLogin').should('be.visible').click();
    });
    it('Autenticação de Login Inválido', ()=>{
        cy.get('#txtUsername').should('be.visible').type('12312321');
        cy.get('#txtPassword').should('be.visible').type('4131241221413');
        cy.get('#btnLogin').should('be.visible').click();
        cy.get('#spanMessage').should('contain.text', 'Invalid credentials');
    });
    it('Teste de Forgot Password', ()=>{
        //Pode falhar caso o administrador não tenha recebido uma requisição de troca de senha
        cy.contains('a', 'Forgot your password?').should('contain.text', 'Forgot your password?').click();
        cy.get('#securityAuthentication_userName').should('be.visible').type('Admin');
        cy.get('#btnSearchValues').should('be.visible').click();
        // Tambem é possivel utilizar cy.get('.message').should('be.visible'), mas pensei ser útil realizar assert da palavra password na mensagem.
        cy.get('.message').then((pw)=> {
            assert.include(pw.text(), 'password');
        });
        cy.wait(5);
        cy.get('.message').should('not.exist');
        cy.get('#btnCancel').click();
        cy.get('#logInPanelHeading').should('contain.text', 'LOGIN Panel');
        cy.wait(1000)
    });
});
