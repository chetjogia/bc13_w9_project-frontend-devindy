import React from 'react'
import { useLocation } from "react-router-dom";
import './index.css' 
import StrengthOrWeakness from '../StrengthOrWeakness'
import {useState} from 'react'


export function BootcamperProfile(props) {    

    const { state } = useLocation();

    function bootcamperStrengthAndWeakness(){
        const bootcamperStrengthAndWeakness = props.bootcamperSW.filter((element)=>element.bootcamper_id===state.id)

        return bootcamperStrengthAndWeakness
    }

    let bootcamperStrengthAndWeaknessArray = bootcamperStrengthAndWeakness()

  
    let bootcamperArray = props.bootcamperArray
    let bootcamper = bootcamperArray.filter((element)=>{
        return element.bootcamper_id===state.id})


    const [locked, setLocked] = useState(true)
    const [hidden, setHidden] = useState(true)

    function correctPassword(event){
        let password = document.querySelector(".password").value
   
      
        if(password===bootcamper[0].password){
            setLocked(false)
            
        }
        else{
            setLocked(true)
           
        }
    }

    function unhidePasswordInput(){
        let e = document.querySelector("#view")
        if(e.value==="view"){
            setHidden(true)
            setLocked(true)
        }
      else{
            setHidden(false)
           
    }
    }


        
    return(
        
    
    <div className='bootcamper-profile'>
        <div className='name-strength-weakness'>

            <div className='bootcamper-profile-header'>
            
                <img className = "profile-picture" src={bootcamper[0].image_url} alt = "profile"></img>
                <h1 className='bootcamper-name-profile'>{bootcamper[0].first_name} {bootcamper[0].last_name}</h1>
                <select onChange={unhidePasswordInput} id="view" name="view">
                    <option value="view">View</option>
                    <option value="edit">Edit</option>
                </select>
                <div className='enter-password'>
                    <input hidden = {hidden} className ="password" type = "password" placeholder='type password here'></input>
                    <button hidden = {hidden} onClick={correctPassword}>Submit Password</button>

                </div>
                
               
            </div>
            
        </div>
        <div className='strength-and-weakness'>
                <StrengthOrWeakness deleteTopic={props.deleteTopic} state={state.id} addTopic={props.addTopic} hidden={locked} className="topic-list-profile" category="Strength" bootcamperStrengthAndWeaknessArray={bootcamperStrengthAndWeaknessArray}/>
                <StrengthOrWeakness deleteTopic={props.deleteTopic} state={state.id} addTopic={props.addTopic} hidden={locked} className="topic-list-profile" category="Weakness" bootcamperStrengthAndWeaknessArray={bootcamperStrengthAndWeaknessArray}/>
            </div>
    </div>        
    )

 }
 
 export default BootcamperProfile