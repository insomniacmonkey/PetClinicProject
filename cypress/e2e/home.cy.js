describe('Welcome page', () => {
  it('displays the welcome message and image', () => {
    cy.visit('http://3.238.20.218:8080/')

    // Check the welcome message
    cy.get('h2').should('have.text', 'Welcome')

    // Check the image
    cy.get('.img-responsive').should('have.attr', 'src', '/resources/images/pets.png')

  })
})