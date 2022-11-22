import './App.css';
import {bootcampers} from '../../TestData/index.js'
import BootcamperList from '../BootcamperList'
import Header from '../Header'
import Search from '../Search'

import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import BootcamperProfile from '../BootcamperProfile';




function App() {
  const [bootcamperArray, setBootcamperArray] = useState(bootcampers)
  const [input, setInput] = useState("")

  useEffect(()=>{
    if(input!==""){
 
      let filteredBootcamperArray = bootcamperArray.filter((element)=>{return element.first_name.toLowerCase().includes(input)})
      setBootcamperArray(filteredBootcamperArray)
    }
    else{
      setBootcamperArray(bootcampers)
    }
    },[input])



  function inputHandler(event){
    let inputValue = document.querySelector(".input").value
    setInput(inputValue)
    setBootcamperArray(bootcampers)
  }



  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={
        <div>
          <Search inputHandler={inputHandler}/>
          <BootcamperList input={input} bootcamperArray={bootcamperArray}/>
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
