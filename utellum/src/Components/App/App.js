import './App.css';
import {bootcampers} from '../../TestData/index.js'
import BootcamperList from '../BootcamperList'
import Header from '../Header'
import Search from '../Search'

import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import BootcamperProfile from '../BootcamperProfile';




function App() {
  const [bootcamperArray, setBootcamperArray] = useState(bootcampers)

  console.log("test",bootcamperArray)

  const [ID, setID] = useState(1)

  function getID(id){
    setID(ID)
  }

  

  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={
        <div>
          <Search/>
          <BootcamperList getID={getID} bootcamperArray={bootcamperArray}/>
        </div>
      }/>
      <Route path="/about" element={
        <div>
          <h1>hello World</h1>
        </div>
      }/>
      <Route exact path="/profile/:id" element={
        <div>
          <BootcamperProfile bootcamperArray={bootcamperArray}/>
        </div>
      }/>
    </Routes>
   
      
    </div>
  );
}

export default App;
