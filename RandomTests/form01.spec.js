///<reference types='cypress' />
describe('teste de formulario', () => {
    it('inputs', ()=>{
        ///Preenchimento automatico de formulario com saida positiva.
        cy.visit('https://automacaocombatista.herokuapp.com/users/new');
        cy.get('#user_name').type('Felipe');
        cy.get('#user_lastname').type('Souza');
        cy.get('#user_email').type('felipevfsbr@gmail.com');
        cy.get('#user_address').type('Av.Joao Pessoa');
        cy.get('#user_university').type('Uninassau');
        cy.get('#user_profile').type('Estudante');
        cy.get('#user_gender').type('Masculino');
        cy.get('#user_age').type('30');
        cy.get('.actions > input').click();
        cy.get('#notice').should('have.text', 'Usuário Criado com sucesso');
        })
})
