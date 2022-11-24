import './App.css';
import About from '../About';
import BootcamperList from '../BootcamperList'
import Header from '../Header'
import Search from '../Search'
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import BootcamperProfile from '../BootcamperProfile';
import { v4 as uuidv4 } from 'uuid'
import Footer from "../Footer"


function App() {

  
  
  const [bootcamperArray, setBootcamperArray] = useState([])
  const [bootcamperSW, setBootcamperSW]=useState([])
  const [counter,setCounter] = useState(0)
  const [input, setInput] = useState("")
  const [filter, setFilter] = useState("first_name")

  useEffect(()=>{
    async function getBootcamperData(){
      const response = await fetch("http://localhost:3000/api/bootcampers/")
      const data = await response.json()
      const bootcamperArray = data.payload[0]
      const bootcamperStrengthsAndWeaknesses = data.payload[1]
      setBootcamperArray(bootcamperArray)
      setBootcamperSW(bootcamperStrengthsAndWeaknesses)
    }
    
    getBootcamperData()
  },[])


  for(let i=0; i<bootcamperArray.length;i++){
    let strengthArray=[]
    let weaknessArray=[]
    for(let j=0; j<bootcamperSW.length; j++){
      if(bootcamperSW[j].bootcamper_id===bootcamperArray[i].bootcamper_id && bootcamperSW[j].strength_weakness===true){
        strengthArray.push(bootcamperSW[j].topic_name.toLowerCase())
      }
      else if(bootcamperSW[j].bootcamper_id===bootcamperArray[i].bootcamper_id && bootcamperSW[j].strength_weakness===false){
        weaknessArray.push(bootcamperSW[j].topic_name.toLowerCase())
      }
    }
    bootcamperArray[i]["strength"]=strengthArray
    bootcamperArray[i]["weakness"]=weaknessArray
   
  }

  

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
      async function getBootcamperData(){
        const response = await fetch("http://localhost:3000/api/bootcampers/")
        const data = await response.json()
        const bootcamperArray = data.payload[0]
        const bootcamperStrengthsAndWeaknesses = data.payload[1]
        setBootcamperArray(bootcamperArray)
        setBootcamperSW(bootcamperStrengthsAndWeaknesses)
      }
      
      getBootcamperData()
    }
    },[input])



    function addTopic(topic_id, strength, id, topic_name, individualBootcamperSW){
   
      let SWObject = {topicId: topic_id, bootcamperId: id, strengthOrWeakness: strength, uniqueId:uuidv4() }
      let SWLocalObject = {topicId: Number(topic_id), bootcamper_id: id, strength_weakness: strength, topic_name: topic_name, unique_id:uuidv4() }
      let exists = false
      const newArray = [...bootcamperSW]
      console.log("individual", individualBootcamperSW)
      for(let i=0; i<individualBootcamperSW.length;i++){
        if(individualBootcamperSW[i].topic_name===SWLocalObject.topic_name){
          exists = true
          console.log("here")
        }   
      }
      if(!exists){
        newArray.push(SWLocalObject)
        fetch('http://localhost:3000/api/bootcampers/', { method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          },
          body: JSON.stringify(SWObject)
         
         })
         .then(response => response.json())
         .then(response => console.log(JSON.stringify(response)))
        setBootcamperSW(newArray)
      }
      else{
        alert("You already have this topic as a strength or weakness, please choose another, or delete the topic before adding")
      }
    
   }

  function inputHandler(event){
    let inputValue = document.querySelector(".input").value
    setInput(inputValue.toLowerCase())
    setBootcamperArray(bootcamperArray)
  }

  function searchFilterChoice(){
      let filter = document.querySelector("#search-filter").value
      setFilter(filter)
  }

  function deleteTopic(id){
     fetch('http://localhost:3000/api/bootcampers/' + id, {
    method: 'DELETE',
    }
    
    )
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))
   
    let index=0
    for(let i=0; i<bootcamperSW.length;i++){
      if(bootcamperSW[i].unique_id===id){
        index=i
      }
    }
    let newArray = [...bootcamperSW.slice(0,index),...bootcamperSW.slice(index+1)]
    setBootcamperSW(newArray)

  }


  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={
        <div>
          <Search searchFilterChoice= {searchFilterChoice} inputHandler={inputHandler}/>
          <div >
            <BootcamperList input={input} bootcamperArray={bootcamperArray} bootcamperSW = {bootcamperSW}/>
          </div>
          
        </div>
      }/>
      <Route path="/about" element={
        <div>
         <About/>
        </div>
      }/>
      <Route exact path="/profile/:id" element={
        <>
          <BootcamperProfile deleteTopic={deleteTopic} addTopic={addTopic} bootcamperArray={bootcamperArray} bootcamperSW = {bootcamperSW}/>
        </>
      }/>
    </Routes>

   
      
    </div>
  );
}

export default App;
