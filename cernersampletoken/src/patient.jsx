import './App.css';
import FHIR from 'fhirclient';
import { useEffect, useState } from 'react';
import { debug } from 'fhirclient/lib/lib';

function Patient(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    var token;
    FHIR.oauth2.ready().then(function(client) {
      token = client.state.tokenResponse.access_token;
      //alert(token);
      // Render the current patient (or any error)
      // client.patient.read().then(
      //     function(pt) {
      //         document.getElementById("patient").innerText = JSON.stringify(pt, null, 4);
      //     },
      //     function(error) {
      //         document.getElementById("patient").innerText = error.stack;
      //     }
      // )
  
      // Get MedicationRequests for the selected patient
      // client.request("/Observation?patient=" + client.patient.id, {
      //     resolveReferences= [ "valueQuantity" ],
      //     graph= true
      // })
  
      // // Reject if no MedicationRequests are found
      // .then(function(data) {
      //     if(!data.entry || !data.entry.length) {
      //         throw new Error("No observation found for the selected patient");
      //     }
      //     return data.entry;
      // })
  
  
      // // Render the current patient's medications (or any error)
      // .then(
      //     function(meds) {
      //         document.getElementById("meds").innerText = JSON.stringify(meds, null, 4);
      //     },
      //     function(error) {
      //         document.getElementById("meds").innerText = error.stack;
      //     }
      // );
  
  
  }).catch(console.error);
  
  useEffect(() => {
    fetch("https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d/Patient?name=wi",{
      method: "GET",
      headers: ({"Authorization": `Bearer ${token}`,
                "Accept":"application/json"})
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.entry);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
  
  
  <script src="https://cdn.jsdelivr.net/npm/fhirclient/build/fhir-client.js"></script>
  
  // return (<div>
  //   <h4>Current Patient</h4>
  
  //   <div id="patient">Loading...</div>
  //   <br/>
  //   <h4>Observations</h4>
  //   <div id="meds">Loading...</div>
   
  // </div>)
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    debugger;
    return (
      
      <ul>
        {items?.map(item => (
          <li key={item.fullUrl}>
            {item.resource.id}
          </li>          
        ))}
      </ul>
    );
  }
  }

  export default Patient;