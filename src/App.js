// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Components/About';
import { useState } from 'react';
import Alerts from './Components/Alerts';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// let name="harsh";
function App() {
  const [mode,setmode]=useState('light');
  
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
setAlert(null);
      },3000)
    }

  const toggleMode=()=>{
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("dark mode has been enabled","success");
    
        document.title='TextUtils-Dark';
    
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
   
        document.title='TextUtils-Light';
   
     
    }
  }
  return (
    <>
  
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alerts alert={alert}/>

<div className="container">
{/* <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <Form  showAlert={showAlert} heading="Enter your text!" mode={mode}/>
          </Route>
        </Switch> */}
         
  <Form  showAlert={showAlert} heading="Enter your text!" mode={mode}/>
 
  <About heading='About'/>
</div>

  </>
  );
}

export default App;
