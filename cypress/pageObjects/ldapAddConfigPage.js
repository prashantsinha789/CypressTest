const mockData = require("../fixtures/ldapMock");

class LdapAddConfig {

  goToTenantConfig() {
    cy.get('input').type('4');
    cy.get('#search-tenants-submit-button').click();
    cy.get('.options').click();
    cy.wait(2000);
    cy.get('[href="/starfish-admin-stageRC/admin/manageConfigs.html?id=4"]').click();
  }

  setLdapUrl() {
    cy.get('.secondary > :nth-child(1) > .ui').click();
    cy.get('.ui > .search').click().type('LDAP_URL');
    cy.get('#value').click();
    cy.get('#value').type(mockData.ldapUrl);
    cy.get('.primary').click();
  }

  setLdapServiceUsername() {
    cy.get('.secondary > :nth-child(1) > .ui').click();
    cy.get('.ui > .search').click().type('LDAP_SERVICE_USERNAME');
    cy.get('#value').click();
    cy.get('#value').type(mockData.ldapServiceUsername);
    cy.get('.primary').click();
  }

  setLdapPassword() {
    cy.get('.secondary > :nth-child(1) > .ui').click();
    cy.get('.ui > .search').click().type('LDAP_SERVICE_PASSWORD');
    cy.get('#value').click();
    cy.get('#value').type(mockData.ldapServicePassword);
    cy.get('.primary').click();
  }

  setLdapBaseDN() {
    cy.get('.secondary > :nth-child(1) > .ui').click();
    cy.get('.ui > .search').click().type('LDAP_BASE_DN');
    cy.get('#value').click();
    cy.get('#value').type(mockData.ldapbasedn);
    cy.get('.primary').click();
  }

  setLdapFilter() {
    cy.get('.secondary > :nth-child(1) > .ui').click();
    cy.get('.ui > .search').click().type('LDAP_FILTER');
    cy.get('#value').click();
    cy.get('#value').type(mockData.ldapFilter);
    cy.get('.primary').click();
  }

  editLocalLoginStategy() {
    cy.get('.action > input').type('LOCAL_LOGIN_STRATEGY');
    cy.get('.action > .ui').click();
    cy.get('.odd > :nth-child(2) > a').click();
    cy.get('#value').click().clear();
    cy.get('#value').type(mockData.localLoginStrategy);
    cy.get('.primary').click();
    cy.wait(2000);
  }
}
export const ldapConf = new LdapAddConfig();
