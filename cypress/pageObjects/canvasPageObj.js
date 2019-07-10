const canvas = require("../fixtures/canvasMock")

class CanvasPage   {

   LoginAsAdmin() {
     cy.visit(canvas.CanvasURL);
     cy.get('#pseudonym_session_unique_id').type(canvas.userid);
     cy.get('#pseudonym_session_password').type(canvas.password);
     cy.get('.ic-Form-control > .Button').click();
   }

   AddApps()   {
      cy.get('#global_nav_accounts_link').click();
      cy.get('[data-reactid=".3.0.0.1.$1"] > .ic-NavMenu-list-item__link').click();
      cy.get('.settings').click();
      cy.get('#tab-tools-link').click();
      cy.get('.AddExternalToolButton > .Button').click();
      cy.get('#configuration_type_selector').select('Paste XML').should('have.value','xml');
      cy.get('[data-reactid=".4.0.0.1.0.0.0.1.0.0"] > label > .form-control').type(canvas.appsName);
      cy.get('[data-reactid=".4.0.0.1.0.0.0.1.0.1.0"] > .control-group > label > .form-control').type(canvas.KeyURL);
      cy.get('[data-reactid=".4.0.0.1.0.0.0.1.0.1.1"] > .control-group > label > .form-control').type(canvas.SecretKey);
      cy.get('#xml').type(canvas.xml);
      cy.get('#submitExternalAppBtn').click();
      cy.get('#continue-install').click();
      cy.get('[data-reactid=".3.0.1.0.0.2.$7"] > .links > .al-dropdown__container > .al-trigger').click();
      cy.get('#ui-id-3').click();
      cy.get('[data-reactid=".y.0.0.1.0.0.1.0.4.0"] > .control-group > label > .form-control').type(canvas.DomaninName);
      cy.get('#submitExternalAppBtn').click();
      cy.get('#global_nav_dashboard_link').click();
      cy.get('.ic-DashboardCard__header_hero').click();
      cy.contains('stageRCAutomated').click();
   }

   RemoveApps()   {
      cy.get('#global_nav_accounts_link').click();
      cy.get('[data-reactid=".3.0.0.1.$1"] > .ic-NavMenu-list-item__link').click();
      cy.get('.settings').click();
      cy.get('#tab-tools-link').click();
      cy.get('[data-reactid=".3.0.1.0.0.2.$7"] > .links > .al-dropdown__container > .al-trigger').click();
      cy.get('#ui-id-5').click();
      cy.get('.Button--danger').click();
   }
}
export const canvaspageObj = new CanvasPage();
