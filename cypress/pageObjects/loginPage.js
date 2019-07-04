const mockData =  require("../fixtures/ldapMock");

class LoginPage{
// Login Methods for SFAdmin
  loginInStageRC()  {
    cy.visit(mockData.sf_Admin_Url);
    cy.clearCache;
    cy.get('#username').type(mockData.sf_username);
    cy.get('#password').type(mockData.password);
  }
  loginInStage()  {
    cy.visit(mockData.sfStage_Admin_Url);
    cy.clearCache;
    cy.get('#username').type(mockData.sf_username);
    cy.get('#password').type(mockData.password);
  }
  loginInSF_EAQA()  {
    cy.visit(mockData.sfEaQa_Admin_Url);
    cy.clearCache;
    cy.get('#username').type(mockData.sfProd_username);
    cy.get('#password').type(mockData.adminProdpassword);
  }
  loginInOPS()  {
    cy.visit(mockData.sfOpsQa_Admin_Url);
    cy.clearCache;
    cy.get('#username').type(mockData.sfProd_username);
    cy.get('#password').type(mockData.adminProdpassword);
  }

// Login Methods for LDAP
  loginInLdapStageRC()  {
    cy.visit(mockData.sf_StageRC_Url);
    cy.clearCache;
    cy.get('#username').clear().type(mockData.username);
    cy.get('#password').clear().type(mockData.ldapPassword);
  }
  loginInLdapStage()  {
    cy.visit(mockData.sf_Stage_Url);
    cy.clearCache;
    cy.get('#username').clear().type(mockData.username);
    cy.get('#password').clear().type(mockData.ldapPassword);
  }
  loginInLdapSF_EA()  {
    cy.visit(mockData.sf_EA_Url);
    cy.clearCache;
    cy.get('#username').clear().type(mockData.username);
    cy.get('#password').clear().type(mockData.ldapPassword);
  }
  loginInLdapSF_Ops()  {
    cy.visit(mockData.sf_Ops_Url);
    cy.clearCache;
    cy.get('#username').clear().type(mockData.username);
    cy.get('#password').clear().type(mockData.ldapPassword);
  }

  // Login Methods for Starfish UI
    loginInSFStageRC()  {
      cy.visit(mockData.sf_StageRC_Url);
      cy.wait(5000);
      cy.reload();
      cy.get('#username').type(mockData.username);
      cy.get('#password').type(mockData.password);
    }
    loginInSFStage()  {
      cy.visit(mockData.sf_Stage_Url);
      cy.clearCache;
      cy.get('#username').type(mockData.username);
      cy.get('#password').type(mockData.password);
    }
    loginInSF_EA()  {
      cy.visit(mockData.sf_EA_Url);
      cy.clearCache;
      cy.get('#username').type(mockData.username);
      cy.get('#password').type(mockData.sfProdPassword);
    }
    loginInSF_OPS()  {
      cy.visit(mockData.sf_Ops_Url);
      cy.clearCache;
      cy.get('#username').type(mockData.username);
      cy.get('#password').type(mockData.sfProdPassword);
    }

//Login For Ldap testerTools
    loginInLdapTesterStageRCAdmin()   {
      cy.visit(mockData.LdapTesterUrl);
      cy.clearCache;
      cy.get('#username').type(mockData.sf_username);
      cy.get('#password').type(mockData.password);
    }

  loginClickButtonOnSFAdmin()   {
    cy.get('.btn').click();
  }
  loginClickButtonOnSFUI()    {
    cy.get('#ext-gen30').click();
  }
}
export const login = new LoginPage();
