Cypress.Commands.add("enterText", (formInputId, userInput) => {
    cy.get(formInputId)
    .type(userInput)
    .should('have.value', userInput);
});

Cypress.Commands.add("errorTextCheck", (formInputId, errorMessage) => {
    cy.get(formInputId).parent().parent().find('.help-inline').should('contain', errorMessage);
});

Cypress.Commands.add('generateUniqueString', () => {
    // Generate a random 25-digit string
    let uniqueString = '';
    for (let i = 0; i < 25; i++) {
      uniqueString += Math.floor(Math.random() * 10);
    }
    return uniqueString;
  });


