// import logo from './logo.svg';
import './App.css';
// import About from './Componenets/About';
import Navbar from './Componenets/Navbar';
import TextForm from './Componenets/TextForm';
import React, { useState } from 'react';
import Alert from './Componenets/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);


  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = (event) => {
    let x = event.target.id;
    if (mode === 'light') {
      switch (x) {
        case 'b1':
          setmode('dark');
          document.body.style.backgroundColor = '#2a2b2b';
          showAlert("Dark mode is enabled", "success");
          document.title = "TextUtils - Dark mode";   // To change title when switching to Dark mode.
          break;

        case 'b2':
          setmode('danger');
          document.body.style.backgroundColor = '#d66060';
          showAlert("Red mode is enabled", "success");
          break;

        case 'b3':
          setmode('success');
          document.body.style.backgroundColor = '#60d678';
          showAlert("Green mode is enabled", "success");
          break;

        default:
          return false;
      }
    }
    else {
      setmode('light'); // Remember to always use single quotes with setmode.
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Home"
    }
  }

  return (
    <>

    {/* <Router> */}
    <Navbar title='TextUtils' abouttext='About' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
      
      <div className="conatiner my-5">
        {/* <Switch> */}
            {/* <Route exact path="/about"> */}
                {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
                <TextForm heading='Enter text to Analyze below:' mode={mode} />
            {/* </Route> */}
        {/* </Switch> */}
      </div>
      
    {/* </Router> */}
      
    </>
  );
}

export default App;
