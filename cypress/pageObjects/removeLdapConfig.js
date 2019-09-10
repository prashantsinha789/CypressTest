const mockData = require("../fixtures/ldapMock");

class RemoveLdapConfig {

  verifyLdapConfig() {
    cy.get('input').type('4');
    cy.get('#search-tenants-submit-button').click();
    cy.get('.options').click();
    cy.get('[href="/starfish-admin-stageRC/admin/manageConfigs.html?id=4"]').click();
  }

  removeLdapBaseDN() {
    cy.get('.action > input').type('LDAP_BASE_DN');
    cy.get('.action > .ui').click();
    cy.get('.buttons > .ui').click();
  }

  removeLdapURL() {
    cy.get('.action > input').type('LDAP_URL');
    cy.get('.action > .ui').click();
    cy.get('.buttons > .ui').click();
  }

  removeLdapUserName() {
    cy.get('.action > input').type('LDAP_SERVICE_USERNAME');
    cy.get('.action > .ui').click();
    cy.get('.buttons > .ui').click();
  }

  removeLdapFilter() {
    cy.get('.action > input').type('LDAP_FILTER');
    cy.get('.action > .ui').click();
    cy.get('.buttons > .ui').click();
  }

  removeLdapPassword() {
    cy.get('.action > input').type('LDAP_SERVICE_PASSWORD');
    cy.get('.action > .ui').click();
    cy.get('.buttons > .ui').click();
  }

  editLocalLogin() {
    cy.get('.action > input').type('LOCAL_LOGIN_STRATEGY');
    cy.get('.action > .ui').click();
    cy.get('.odd > :nth-child(2) > a').click();
    cy.get('#value').click().clear();
    cy.get('#value').type("com.starfish.officehours.controller.security.DefaultLocalLoginStrategy");
    cy.get('.primary').click();
    cy.wait(10000);
  }
}
export const removeLdap = new RemoveLdapConfig();
