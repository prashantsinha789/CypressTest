module.exports.sf_username = "sfadmindev"; //username for Stage & stageRC
module.exports.username = "ygold"; //username for Starfish UI

module.exports.password = "hawa11"; //Password for Starfish Stage & stageRC
module.exports.sfProdPassword = "st@rfish"; //Password for Starfish Ea-Qa & ops
module.exports.ldapPassword = "8DJDgQPyBHZpmQRFv3Tg"; //Password for Starfish LDAP
module.exports.ldapServicePassword = "FQwicCcC7}GL7mKUezBW"; //password for LDAP_SERVICE

module.exports.sf_Admin_Url = "https://admin-stage-rc.starfishsolutions.com/starfish-admin-stageRC/login.jsp";
module.exports.sf_StageRC_Url = "https://stage-rc.starfishsolutions.com/starfish-stageRC/support/login.html";

module.exports.LdapTesterUrl = "https://admin-stage-rc.starfishsolutions.com/starfish-admin-stageRC/tools/index.html";

module.exports.ldapUrl = "ldaps://ldap-stagerc.starfishsolutions.com:10202";
module.exports.ldapServiceUsername = "cn=admin,dc=example,dc=org";
module.exports.ldapbasedn = "ou=Users,dc=example,dc=org";
module.exports.ldapFilter = "(&(objectClass=person)(uid=STARFISH_USERNAME))";
module.exports.localLoginStrategy = "com.starfish.officehours.controller.security.LdapLocalLoginStrategy";

module.exports.SFDashboard = "tenantId=4";
