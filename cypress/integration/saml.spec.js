const mockData =  require("../fixtures/ldapMock");
const saml = require("../fixtures/samlMock")
import {login} from "../pageObjects/loginPage"
import {ldapConf} from "../pageObjects/ldapAddConfigPage"
import {samlConf} from "../pageObjects/samlPage"
import {removeSaml} from "../pageObjects/removeSamlConigPage"


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('SAML ConfigFiles Entries in SFAdmin',() =>  {
//     it('Saml should be acquired on SF',() =>  {
//         login.loginInStageRC();
//         login.loginClickButtonOnSFAdmin();
//
//         ldapConf.goToTenantConfig();
//         samlConf.setSamlLogoutURL();
//         samlConf.setLogoutLink();
//         samlConf.setIdapServerURL();
//         samlConf.setSamlMetadata();
//       })
//
//     it('Verify Saml on Starfish',() =>  {
//         login.loginInSFStageRC();
//         login.loginClickButtonOnSFUI();
//         samlConf.clearCacheSF();
//         login.loginInSFStageRC();
//         login.loginClickButtonSaml();
//       })
//
//     it('Remove all Saml configs from SFAdmin',() => {
//         login.loginInStageRC();
//         login.loginClickButtonOnSFAdmin();
//
//         //RemoveSamlConfig
//         removeSaml.verifySamlConfig();
//         removeSaml.removeSamlLogoutUrl();
//         removeSaml.removeSamlLogoutLink();
//         removeSaml.removeIdapUrl();
//         removeSaml.removesamlMetadataAlias();
//     })
//
    it('Verify Starfish after removing the configs',() =>  {
        // login.loginInSFStageRC();
        // login.loginClickButtonSaml();
        // samlConf.clearCacheSF();
        login.loginInSFStageRC();
        login.loginClickButtonOnSFUI();
        expect(cy.url().should('include', 'tenantId=4'));
      })
  })
