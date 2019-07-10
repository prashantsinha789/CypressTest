// Pre-Requisite : Add LTI USER KEY in SFADMIN Manually, that will remove the manual intervention for Connecting VPN.

import {canvaspageObj} from "../pageObjects/canvasPageObj"
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Canvas SSO Verification',() =>  {
    it('Login as an Admin in Canvas and Add apps',() =>  {
          canvaspageObj.LoginAsAdmin();
          canvaspageObj.AddApps();
    })

    it('Remove the Recently Added Apps',() => {
          canvaspageObj.LoginAsAdmin();
          canvaspageObj.RemoveApps();

    })
  })
