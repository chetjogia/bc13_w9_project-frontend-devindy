import './App.css';
import {bootcampers} from '../../TestData/index.js'
import BootcamperList from '../BootcamperList'
import Header from '../Header'
import Search from '../Search'
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import BootcamperProfile from '../BootcamperProfile';
import { strengths_weaknesses } from '../../TestData/index.js';



function App() {
  for(let i=0; i<bootcampers.length;i++){
    let strengthArray=[]
    let weaknessArray=[]
    for(let j=0; j<strengths_weaknesses.length; j++){
      if(strengths_weaknesses[j].bootcamper_ID===bootcampers[i].id && strengths_weaknesses[j].strength_weakness===true){
        strengthArray.push(strengths_weaknesses[j].topic_name.toLowerCase())
      }
      else if(strengths_weaknesses[j].bootcamper_ID===bootcampers[i].id && strengths_weaknesses[j].strength_weakness===false){
        weaknessArray.push(strengths_weaknesses[j].topic_name.toLowerCase())
      }
    }
    bootcampers[i]["strength"]=strengthArray
    bootcampers[i]["weakness"]=weaknessArray
  }

  const [bootcamperArray, setBootcamperArray] = useState(bootcampers)
  const [input, setInput] = useState("")
  const [filter, setFilter] = useState("first_name")

  useEffect(()=>{
    if(input!==""){
      let filteredBootcamperArray = []
      if(filter==="first_name"||filter==="last_name"){
         filteredBootcamperArray = bootcamperArray.filter((element)=>{return element[filter].toLowerCase().includes(input)})
      }
      else if(filter==="strength"||filter==="weakness"){
         filteredBootcamperArray = bootcamperArray.filter((element)=>{return element[filter].some(e=>e.includes(input))})
      }
      setBootcamperArray(filteredBootcamperArray)
    }
    else{
      setBootcamperArray(bootcampers)
    }
    },[input])



  function inputHandler(event){
    let inputValue = document.querySelector(".input").value
    setInput(inputValue.toLowerCase())
    setBootcamperArray(bootcampers)
  }

  function searchFilterChoice(){
      let filter = document.querySelector("#search-filter").value
      setFilter(filter)
  }


  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={
        <div>
          <Search searchFilterChoice= {searchFilterChoice} inputHandler={inputHandler}/>
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
