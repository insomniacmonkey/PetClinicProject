//Form Page
Cypress.Commands.add("enterText", (formInputId, userInput) => {
    cy.get(formInputId)
    .type(userInput)
    .should('have.value', userInput);
});

Cypress.Commands.add("errorTextCheck", (formInputId) => {
    cy.get(formInputId).parent().parent().find('.help-inline').should('contain', 'must not be empty');
});
