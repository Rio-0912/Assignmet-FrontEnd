import React, { useState } from 'react'; // Import React and useState

import './App.css';
import Navbar from './Components/Navbar';
import Alerts from './Components/Alerts.js';
import About from './Components/About.js';
import TextForm from './Components/TextForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Define and initialize state
  const [alert, setalert] = useState(null)
  const [butn, setbutn] = useState('-dark')

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1200);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      setbutn('-dark')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#32383f'
      showAlert('Light mode has been enabled', 'success  ')
      document.title = 'Text Utils -  Light Mode '
    } else {
      setMode('dark')
      setbutn('-light')
      document.body.style.backgroundColor = '#32383f'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success  ')
      document.title = 'Text Utils -  Dark Mode '
    }
  }
  const greene = () => {
    setMode('dark')
    setbutn('-success')
    document.body.style.backgroundColor = '#234223'
    document.body.style.color = 'white'
    console.log('greene workded ');
    document.title = 'Text Utils -  Green Mode '
  }
  const rede = () => {
    setMode('dark')
    setbutn('-danger')
    document.body.style.backgroundColor = '#683b3b'
    document.body.style.color = 'white'
    console.log('greene workded ');
    document.title = 'Text Utils -  Red Mode '
  }
  const bluee = () => {
    setMode('dark')
    setbutn('-info')
    document.body.style.backgroundColor = '#1a1a48'
    document.body.style.color = 'white'
    console.log('greene workded ');
    document.title = 'Text Utils -  Blue Mode '
  }
  // outliner 


  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} rede={rede} bluee={bluee} greene={greene} />
        <Alerts alert={alert} />
        <Routes>
          <Route
            path="/about"
            element={<About mode={mode} showAlert={showAlert} />}
          />
          <Route
            path="/"
            element={<TextForm heading="Enter the Text" mode={mode} butn={butn} showAlert={showAlert} />}
          />
        </Routes>
      </BrowserRouter>
      {/* Default position  */}
      {/* <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} rede={rede} bluee={bluee} greene={greene} />
      <Alerts alert={alert} />
      <TextForm heading="Enter the Text" mode={mode} butn={butn} showAlert={showAlert} /> */}

    </>
  );
}

export default App;
