class RemoveSamlConfig    {

    verifySamlConfig()   {
        cy.get('input').type('4');
        cy.get('#search-tenants-submit-button').click();
        cy.get('.options').click();
        cy.get('[href="/starfish-admin-stageRC/admin/manageConfigs.html?id=4"]').click();
    }

    removeSamlLogoutUrl()    {
      cy.get('.action > input').type('LOGOUT_URL_REDIRECT');
      cy.get('.action > .ui').click();
      cy.get('.buttons > .ui').click();
    }

    removeSamlLogoutLink()    {
      cy.get('.action > input').type('LOGOUT_LINK_ENABLED');
      cy.get('.action > .ui').click();
      cy.get('.buttons > .ui').click();
    }

    removeIdapUrl()    {
      cy.get('.action > input').type('SAML_IDP_SERVER_URL');
      cy.get('.action > .ui').click();
      cy.get('.buttons > .ui').click();
    }

    removesamlMetadataAlias()    {
      cy.get('.action > input').type('SAML_METADATA_ALIAS');
      cy.get('.action > .ui').click();
      cy.get('.buttons > .ui').click();
  }
}
export const removeSaml = new RemoveSamlConfig();
