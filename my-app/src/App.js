import React, { useState } from 'react'; // Import React and useState

import './App.css';
import Navbar from './Components/Navbar';
import Alerts from './Components/Alerts.js';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('dark'); // Define and initialize state
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null )
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#32383f'
      showAlert('Light mode has been enabled', 'success  ')
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#32383f'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success  ')
    }
  }
  return (
    <>
      <Navbar title="Text Utils" toggleMode={toggleMode} mode={mode} />
      <Alerts alert={alert} />
      <TextForm heading="Enter the Text" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
