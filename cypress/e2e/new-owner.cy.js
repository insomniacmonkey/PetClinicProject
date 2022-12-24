import '../support/commands.js';
describe('New Owner Form', () => {
    beforeEach(() => {
      cy.visit('http://3.238.20.218:8080/owners/new');
    });
  
    it('should enter text into each field', () => {
      
      cy.enterText("#firstName","Tester");
      cy.enterText("#lastName","UniqueNameTester");
      cy.enterText("#address","123 Main St.");
      cy.enterText("#city","FakeCity");
      cy.enterText("#telephone","404555555");

    });
   
  
    it('should display error messages when form is submitted with invalid input', () => {
      cy.get('button[type="submit"]').click();
      //This is a very flakey way to do it. Ideally we would have data ids. 
      cy.errorTextCheck('#firstName','must not be empty')
      cy.errorTextCheck('#lastName','must not be empty')
      cy.errorTextCheck('#address','must not be empty')
      cy.errorTextCheck('#city','must not be empty')
      cy.errorTextCheck('#telephone','must not be empty')

    });

    it('should create a new owner', () => {
      cy.enterText("#firstName", "Success");
      cy.enterText("#lastName","UniqueNameTester");
      cy.enterText("#address","123 Main St.");
      cy.enterText("#city","FakeCity");
      cy.enterText("#telephone","404555555");
      cy.get('button[type="submit"]').click();

      //Verify the /owner/# success page. This is a very quick way to make sure the data is there. 
      cy.contains('Owner Information');

      cy.contains('Name');
      cy.contains('Success UniqueNameTester');

      cy.contains('Address');
      cy.contains('123 Main St.');

      cy.contains('City');
      cy.contains('FakeCity');

      cy.contains('Telephone');
      cy.contains('404555555');

      });



  });