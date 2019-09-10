const mockData = require("../fixtures/ldapMock");

class LoginPage {
  // Login Methods for SFAdmin
  loginInStageRC() {
    cy.visit(mockData.sf_Admin_Url);
    cy.clearCache;
    cy.get('#username').type(mockData.sf_username);
    cy.get('#password').type(mockData.password);
  }

  // Login Methods for LDAP
  loginInLdapStageRC() {
    cy.visit(mockData.sf_StageRC_Url);
    cy.clearCache;
    cy.get('#username').clear().type(mockData.username);
    cy.get('#password').clear().type(mockData.ldapPassword);
  }
  // Login Methods for Starfish UI
  loginInSFStageRC() {
    cy.visit(mockData.sf_StageRC_Url);
    cy.wait(5000);
    cy.reload();
    cy.get('#username').type(mockData.username);
    cy.get('#password').type(mockData.password);
  }
  //Login For Ldap testerTools
  loginInLdapTesterStageRCAdmin() {
    cy.visit(mockData.LdapTesterUrl);
    cy.clearCache;
    cy.get('#username').type(mockData.sf_username);
    cy.get('#password').type(mockData.password);
  }

  loginClickButtonOnSFAdmin() {
    cy.get('.btn').click();
  }
  loginClickButtonOnSFUI() {
    cy.get('#ext-gen30').click();
  }
}
export const login = new LoginPage();
