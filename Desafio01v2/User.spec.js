///<reference types='cypress' />
describe('Teste de BD de Candidatos', () => {
    
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        });
    it('Teste de Pesquisa', ()=>{
        //Coloquei .wait porque o proximo .get estava sendo atropelado.
        //Por algum motivo, se não introduzir cy.wait() no final de cada teste, o relatorio em video sofre cortes.
        cy.loginAdmin();
        cy.get('#candidateSearch_jobTitle').should('be.visible').select('QA Lead');
        cy.wait(1000);
        cy.get('#candidateSearch_jobVacancy').should('be.visible').select('Senior QA Lead');
        cy.wait(1000);
        cy.get('#candidateSearch_status').should('be.visible').select('Application Initiated');
        cy.wait(1000);
        cy.get('#candidateSearch_candidateName').should('be.visible').type('Joe Root');
        cy.wait(1000);
        cy.get('#btnSrch').should('be.visible').click();
        cy.contains('a', 'Joe Root').should('have.text', 'Joe  Root');
        cy.wait(1000);
    });
    it('Teste de Cadastro', ()=>{
        cy.loginAdmin();
        cy.get('#btnAdd').click();
        cy.get('#addCandidate_firstName').should('be.visible').type('Felipe');
        cy.get('#addCandidate_middleName').should('be.visible').type('Néris');
        cy.get('#addCandidate_lastName').should('be.visible').type('Souza');
        cy.get('#addCandidate_email').should('be.visible').type('felipevfsbr@gmail.com');
        cy.get('#addCandidate_contactNo').should('be.visible').type('+5583988382720');
        cy.get('#addCandidate_vacancy').should('be.visible').select('Senior QA Lead');
        cy.get('#addCandidate_keyWords').should('be.visible').type('Felipe; QA; Analista; Qualidade');
        cy.get('#addCandidate_comment').should('be.visible').type('Expêriencia de 12 anos como Suporte em TI autonomo, Eletronica e Redes, em busca de mudança de Area de atuação, preferencialmente para Area de QA.')
        cy.get('#addCandidate_consentToKeepData').should('be.visible').check().should('be.checked');
        cy.get('#addCandidate_resume').should('be.visible').selectFile('teste.docx');
        cy.get('#btnSave').should('be.visible').click();
        cy.get('.message').should('contain.text', 'Successfully Saved');
        cy.wait(1000);
    });
    it('Teste de Edição de Cadastro', ()=>{
        cy.loginAdmin();
        cy.get('#candidateSearch_jobTitle').should('be.visible').select('QA Lead');
        cy.wait(1000);
        cy.get('#candidateSearch_jobVacancy').should('be.visible').select('Senior QA Lead');
        cy.wait(1000);
        cy.get('#candidateSearch_status').should('be.visible').select('Application Initiated');
        cy.wait(1000);
        cy.get('#candidateSearch_candidateName').should('be.visible').type('Joe Root');
        cy.wait(1000);
        cy.get('#btnSrch').should('be.visible').click();
        cy.contains('a', 'Joe Root').should('be.visible').click();
        cy.get('#btnSave').should('be.visible').click()
        cy.get('#addCandidate_email').should('be.visible').clear().type('testando@email.com')
        cy.get('#addCandidate_contactNo').should('be.visible').clear().type('83999999')
        cy.get('#btnSave').should('be.visible').click()
        cy.get('.message').should('contain.text', 'Successfully Saved');
        cy.wait(1000);
    });
});
