const mockData = require("../fixtures/ldapMock");

class LdapTester {

  testerTools() {
    cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click();
    cy.get(':nth-child(1) > .field > .ui > input').click();
    cy.get(':nth-child(1) > .field > .ui > input').type("4");
    cy.get('#populateButton').click();
    cy.get(':nth-child(12) > .ui > input').click();
    cy.get(':nth-child(12) > .ui > input').type(mockData.username);
    cy.get(':nth-child(13) > .ui > input').click();
    cy.get(':nth-child(13) > .ui > input').type(mockData.ldapPassword);
    cy.get('#testButton').click();
  }
}
export const ldapTestTool = new LdapTester();
