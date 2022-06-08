//<reference types='cypress' />
describe('Teste de Rede Social', () => {
       
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
            
    });
        it('Postagem de texto', ()=>{
            cy.loginAdmin();
            cy.contains('b', 'Buzz').click()
            cy.get('#createPost_content').should('be.visible').type('Teste de Rede Social -ok');
            cy.get('#postSubmitBtn').should('be.visible').click();
        });
        it('Postagem de foto', ()=>{
        //Não consegui fazer com que a imagem fosse upada, apareceu um erro jQuerry impedindo o funcionamento do elemento sem intervenção do usuario.
            cy.loginAdmin();
            cy.contains('b', 'Buzz').click()
            cy.get('#tabLink2').should('be.visible').click();
            cy.get('#phototext').should('be.visible').type('Postando Foto Hoje!');
            cy.wait(3000)
            //cy.get('input[id="image-upload-button"]').should('be.visible').click().attachFile('teste.jpg');
            cy.fixture('teste.jpg').then(fileContent => {
            cy.get('input[id="image-upload-button"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'teste.jpg',
                mimeType: 'image/jpg'
            });
        });
            cy.wait(3000)
            cy.get('#imageUploadBtn').should('be.visible').click();
        });
    
        it('Postagem de video', ()=>{
        //Consegui fazer a postagem da URL do youtube Simulando um Control+V(.paste), por type não funcionou.
            cy.loginAdmin();
            cy.contains('b', 'Buzz').click()
            cy.get('#tabLink3').should('be.visible').click();
            cy.get("#createVideo_content").should('be.visible').paste('https://www.youtube.com/watch?v=4tJxjnuLJMM');
            cy.wait(3000);
            cy.get('[value="Save Video"]').should('be.visible').click();
        });
    });
