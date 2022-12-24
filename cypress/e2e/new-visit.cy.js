import '../support/commands.js';
describe('New Visit page', () => {
    beforeEach(() => {
        //Created a unique user just for this test
        cy.visit('http://3.238.20.218:8080/owners/21/pets/27/visits/new');
      });

    it('displays the correct information and form elements', () => {
      
      // Verify the page heading
      cy.contains('h2', 'New Visit');
  
      // Verify the pet information table
      cy.get('table').contains('td', 'LotsOfVisits');
      cy.get('table').contains('td', '2022-12-01');
      cy.get('table').contains('td', 'lizard');
      cy.get('table').contains('td', 'Success UniqueNameTester');
  
      // Verify the form elements
      cy.get('form').contains('label', 'Date');
      cy.get('form').contains('label', 'Description');
      //cy.get('form').find('input[type=date]').should('have.value', '2022-12-24');
      cy.get('form').find('input[type=text]').should('have.attr', 'id', 'description');
      cy.get('form').find('button[type=submit]').should('have.text', 'Add Visit');
  
      // Verify the previous visits table
      cy.get('table').contains('th', 'Date');
      cy.get('table').contains('th', 'Description');

    })

    it('should display error messages when form is submitted with invalid input', () => {
        cy.get('.btn.btn-primary').click();
        cy.errorTextCheck('#description','must not be empty');

    });

    it('should create a new unique visit', () => {
        cy.generateUniqueString().then((uniqueString) => {
            cy.get('#date').type('1988-11-01');
            cy.get('#description').type(uniqueString);
            cy.get('.btn.btn-primary').click();

            //Verify the new event is created
            cy.contains(uniqueString);

          });
            
    });

  })
  