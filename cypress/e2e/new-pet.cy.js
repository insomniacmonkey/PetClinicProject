import '../support/commands.js';
describe('New Pet Form', () => {
    beforeEach(() => {
        //Created a unique user just for this test
        cy.visit('http://3.238.20.218:8080/owners/24/pets/new');
      });

    it('should accept user input', () => {
        cy.get('#name').type('Fluffy');
        cy.get('#birthDate').type('1988-11-01');
        cy.get('#type').select('cat');
        
    });

    it('should display error messages when form is submitted with invalid input', () => {
        cy.get('.btn.btn-primary').click();
        cy.errorTextCheck('#name','is required');
        cy.errorTextCheck('#birthDate','is required');
    });

    it('should not be able to reuse name', () => {
        cy.get('#name').type('TestKitty');
        cy.get('#birthDate').type('1988-11-01');
        cy.get('#type').select('cat');
        cy.get('.btn.btn-primary').click();
        cy.errorTextCheck('#name','is already in use');
        
    });

    it('should create new unique pet', () => {
        cy.generateUniqueString().then((uniqueString) => {
            cy.get('#name').type(uniqueString);
            cy.get('#birthDate').type('1988-11-01');
            cy.get('#type').select('cat');
            cy.get('.btn.btn-primary').click();

            //Verify the /owner/24 success page. This is a very quick way to make sure the data is there. 
            cy.url().should('contain','/owners/24');
            //This will be a problem if there is too many pets/pagination.
            cy.contains(uniqueString);

          });

    });

    
  });