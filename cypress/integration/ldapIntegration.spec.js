import {login} from "../pageObjects/loginPage"
import {ldapConf} from "../pageObjects/ldapAddConfigPage"
import {ldapTestTool} from "../pageObjects/ldapTesterPage"
import {removeLdap} from "../pageObjects/removeLdapConfig"

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Ldap ConfigFiles Entries in SFAdmin',() =>  {
    it('Ldap should be acquired on SF',() =>  {
        login.loginInStageRC();
        login.loginClickButtonOnSFAdmin();

        ldapConf.goToTenantConfig();             //Go to tenant and select the configs
        ldapConf.setLdapUrl();                   //Add Config Value for LDAP_URL
        ldapConf.setLdapServiceUsername();       //Add Config Value for LDAP_SERVICE_USERNAME
        ldapConf.setLdapPassword();              //Add Config value for LDAP Password
        ldapConf.setLdapBaseDN();                //Add Config Value for LdapBaseDN
        ldapConf.setLdapFilter();                //Add Config Value for LdapFilter
        ldapConf.editLocalLoginStategy();        //Edit localLoginStrategy
 })

it('Verify the Ldap Setup through Ldap Tester Tools',() => {

    login.loginInLdapTesterStageRCAdmin();
    login.loginClickButtonOnSFAdmin();
    ldapTestTool.testerTools();
    cy.wait(10000);
})

it('Verify the Ldap SSO on Starfish-StageRC',() => {
      login.loginInSFStageRC();
      login.loginClickButtonOnSFUI();
      login.loginInLdapStageRC();
      login.loginClickButtonOnSFUI();
      cy.wait(5000);
      cy.url().should('include', mockData.SFDashboard);
})
it('Remove all Ldap configs from SFAdmin',() => {

  login.loginInStageRC();
  login.loginClickButtonOnSFAdmin();
  removeLdap.verifyLdapConfig();

  /* Removing Ldap Configs from SFAdmin StageRC */

  removeLdap.removeLdapBaseDN();
  removeLdap.removeLdapURL();
  removeLdap.removeLdapUserName();
  removeLdap.removeLdapFilter();
  removeLdap.removeLdapPassword();
  removeLdap.editLocalLogin();
})
it('Verify the Login on Starfish-StageRC',() => {
  login.loginInSFStageRC();
  login.loginClickButtonOnSFUI();
  cy.url().should('include', mockData.SFDashboard);
})
})
