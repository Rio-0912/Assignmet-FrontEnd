
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
  
      <Navbar title = "Text Utils"/>
      <TextForm heading = "Enter the Text"/>
      <About/>
    </>
  );
}

export default App;
