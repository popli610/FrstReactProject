
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alerts from './components/Alerts'
// import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      showAlert("Dark mode enabled", "success");
      if (color === 'primary') {
        document.body.style.backgroundColor = 'rgb(0 52 72)';
      }
      if (color === 'success') {
        document.body.style.backgroundColor = 'rgb(24 54 43)';
      }
      if (color === 'warning') {
        document.body.style.backgroundColor = 'rgb(78 60 10)';
      }

    }
    else {
      setmode('light');

      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");

    }
  }
  const [color, setcolor] = useState('primary')
  const changecolor = (COLOR) => {
    setcolor(COLOR);
    if (mode === 'dark' && COLOR === 'primary') {
      document.body.style.backgroundColor = 'rgb(0 52 72)';
    }
    if (mode === 'dark' && COLOR === 'success') {
      document.body.style.backgroundColor = 'rgb(24 54 43)';
    }
    if (mode === 'dark' && COLOR === 'warning') {
      document.body.style.backgroundColor = 'rgb(78 60 10)';
    }
  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} colortheme={changecolor} about="About TextUtils"/>
        <Alerts alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm heading="Enter the text to analyse" showAlert={showAlert} mode={mode} color={color} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
