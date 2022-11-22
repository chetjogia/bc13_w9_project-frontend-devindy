import './App.css';
import {bootcampers} from '../../TestData/index.js'
import BootcamperList from '../BootcamperList'
import Header from '../Header'
import Search from '../Search'
import {useState} from 'react'





function App() {
  const [bootcamperArray, setBootcamperArray] = useState(bootcampers)

  console.log("test",bootcamperArray)
  return (
    <div className="App">
      <Header/>
      <Search/>
      <BootcamperList bootcamperArray={bootcamperArray}/>
    </div>
  );
}

export default App;
