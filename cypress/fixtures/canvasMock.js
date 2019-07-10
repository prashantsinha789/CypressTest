module.exports.CanvasURL="http://canvas-dev.starfishsolutions.com/login/canvas";
module.exports.userid="ygold";
module.exports.password="st@rfish";
module.exports.appsName="stageRCAutomated";
module.exports.SecretKey="c7fa9687-f9f1-4b85-8b79-a1e255e2c501";
module.exports.KeyURL="stage-rc";
module.exports.xml=`<?xml version="1.0" encoding="UTF-8"?>
<cartridge_basiclti_link xmlns="http://www.imsglobal.org/xsd/imslticc_v1p0"
   xmlns:blti = "http://www.imsglobal.org/xsd/imsbasiclti_v1p0"
   xmlns:lticm ="http://www.imsglobal.org/xsd/imslticm_v1p0"
   xmlns:lticp ="http://www.imsglobal.org/xsd/imslticp_v1p0"
   xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation = "http://www.imsglobal.org/xsd/imslticc_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticc_v1p0.xsd
   http://www.imsglobal.org/xsd/imsbasiclti_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imsbasiclti_v1p0.xsd
   http://www.imsglobal.org/xsd/imslticm_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticm_v1p0.xsd
   http://www.imsglobal.org/xsd/imslticp_v1p0 http://www.imsglobal.org/xsd/lti/ltiv1p0/imslticp_v1p0.xsd">
   <blti:launch_url>https://stage-rc.starfishsolutions.com/starfish-stageRC/support/ltiLogin.html</blti:launch_url>
   <blti:title>Starfish</blti:title>
   <blti:description>Go to Starfish</blti:description>
   <blti:extensions platform="canvas.instructure.com">
      <lticm:property name="privacy_level">public</lticm:property>
      <lticm:options name="course_navigation">
         <lticm:property name="enabled">true</lticm:property>
      </lticm:options>
   </blti:extensions>
</cartridge_basiclti_link>`;

module.exports.DomaninName="stage-rc.starfishsolutions.com";
