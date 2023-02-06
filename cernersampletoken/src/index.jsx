import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import Launch from './launch';
import Patient from './patient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<div>
<Router>
     
     {/* <div className="App">
     </div> */}
     {/* <div>
     <a href="launch">If you are a provider, login here!</a>
     </div> */}
     
     <Routes>
     <Route index element={<Navigate replace to="launch" />} />
     <Route path="launch" element={<Launch />} />
     <Route exact path='/App' element={< App />}></Route>
     {/* <Route exact path='/launch' element={< Launch />}></Route> */}
     <Route exact path='/patient' element={< Patient />}></Route>
</Routes>
     
     </Router>

</div>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
