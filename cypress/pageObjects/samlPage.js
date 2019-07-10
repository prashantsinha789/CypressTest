const mockData =  require("../fixtures/ldapMock");
const saml = require("../fixtures/samlMock")

class samlPage    {

  setSamlLogoutURL()  {
    cy.get('.secondary > :nth-child(1) > .ui').click();
    cy.get('#tenant-config-form > :nth-child(1) > .ui > .dropdown').click();
    cy.get('.ui > .search').type('LOGOUT_URL_REDIRECT');
    cy.get('#value').click();
    cy.get('#value').type(saml.logoutURL);
    cy.get('.primary').click();
  }

  setLogoutLink()   {
    cy.get('.secondary > :nth-child(1) > .ui').click();
    cy.get('#tenant-config-form > :nth-child(1) > .ui > .dropdown').click();
    cy.get('.ui > .search').type('LOGOUT_LINK_ENABLED');
    cy.get('#value').click({force:true});
    cy.get('#value').click({force:true});
    cy.get('.primary').click();
  }

  setIdapServerURL()  {
    cy.get('.secondary > :nth-child(1) > .ui').click();
    cy.get('#tenant-config-form > :nth-child(1) > .ui > .dropdown').click();
    cy.get('.ui > .search').type('SAML_IDP_SERVER_URL');
    cy.get('#value').click();
    cy.get('#value').type(saml.idapServerUrl);
    cy.get('.primary').click();
  }

  setSamlMetadata()  {
    cy.get('.secondary > :nth-child(1) > .ui').click();
    cy.get('#tenant-config-form > :nth-child(1) > .ui > .dropdown').click();
    cy.get('.ui > .search').type('SAML_METADATA_ALIAS');
    // cy.get('.message').click();
    cy.get('#note').click();
    cy.get('#note').type(saml.samlMetaData);
    cy.get('.primary').click();
  }

  clearCacheSF()  {
    cy.visit("https://stage-rc.starfishsolutions.com/starfish-stageRC/console/index.html?tenantId=4");
    cy.contains('TenantDaoCache').click();
    cy.get('ext-gen77').click();
  }

}
export const samlConf = new samlPage();
