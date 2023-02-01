import React from 'react';
import FHIR from 'fhirclient';

function Launch () {
    <script src="https://cdn.jsdelivr.net/npm/fhirclient/build/fhir-client.js"></script>
    FHIR.oauth2.authorize({
        clientId: "3dce1300-ce75-4fd3-81a4-561618f4aa6f",
        scope: "patient/Patient.read patient/Observation.read launch online_access openid profile",
        iss:"https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
// <!--              patientId:"12724065",-->
        redirectUri: "http://192.168.29.170:8000/app",
        launch:"a7b726f7-ea3c-4ad7-bef4-4eab4b3b0857",
        response_type:"code"
      });

      return(
        <p>Authorizing.....</p>
      );
}

export default Launch;