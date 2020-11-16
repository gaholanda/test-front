describe('End to End test', () => {
  it('should open the app and navigate throught it', () => {
    cy.visit('/');
    cy.wait(3000);
    cy.get('a').click();
    cy.get('input[name="number"]').type('4916903529881773');
    cy.get('input[name="name"]').type('JOSE SILVA');
    cy.get('input[name="expiry"]').type('112028');
    cy.get('input[name="cvc"]').type('343');
    cy.wait(2000);
    cy.get('a').click();
  })
})