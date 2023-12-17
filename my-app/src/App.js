import React, { useState } from 'react'; // Import React and useState

import './App.css';
import Navbar from './Components/Navbar';
import Alerts from './Components/Alerts.js';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('dark'); // Define and initialize state
  const [alert, setalert] = useState(null)
  const [butn, setbutn] = useState('primary')

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
    } else {
      setMode('dark')
      setbutn('-light')
      document.body.style.backgroundColor = '#32383f'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success  ')
    }
  }
  const greene = () => {
    setMode('dark')
    setbutn('-success')
    document.body.style.backgroundColor = '#234223'
    document.body.style.color = 'white'
    console.log('greene workded ');
  }
  const rede = () => {
    setMode('dark')
    setbutn('-danger')
    document.body.style.backgroundColor = '#683b3b'
    document.body.style.color = 'white'
    console.log('greene workded ');
  }
  const bluee = () => {
    setMode('dark')
    setbutn('-info')
    document.body.style.backgroundColor = '#1a1a48'
    document.body.style.color = 'white'
    console.log('greene workded ');
  }
  // outliner 

  
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} rede={rede} bluee={bluee} greene={greene} />
      <div className="container">
        <Alerts alert={alert} />
        <TextForm heading="Enter the Text" mode={mode} butn={butn}  showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
