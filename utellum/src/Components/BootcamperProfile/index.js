import React from 'react'
import { useLocation } from "react-router-dom";
import './index.css' 
import StrengthOrWeakness from '../StrengthOrWeakness'
import { strengths_weaknesses } from '../../TestData'
import {useState} from 'react'


export function BootcamperProfile(props) {    
    const { state } = useLocation();
    
    function bootcamperStrengthAndWeakness(){
        const bootcamperStrengthAndWeakness = strengths_weaknesses.filter((element)=>element.bootcamper_ID===state.id)
        return bootcamperStrengthAndWeakness
    }

    let bootcamperStrengthAndWeaknessArray = bootcamperStrengthAndWeakness()
    let bootcamperArray = props.bootcamperArray
    let bootcamper = bootcamperArray.filter((element)=>{
        return element.id===state.id})


    const [locked, setLocked] = useState(true)

    function correctPassword(event){
        let password = document.querySelector(".password").value
        console.log(password)
      
        if(password===bootcamper[0].password){
            setLocked(false)
            
        }
        else{
            setLocked(true)
           
        }
    }
        
    return(
        
    
    <div className='bootcamper-profile'>
        <img className = "profile-picture" src={bootcamper[0].image_url} alt = "profile"></img>
        <div className='name-strength-weakness'>

            <div>
                <h1 className='bootcamper-name'>{bootcamper[0].first_name} {bootcamper[0].last_name}</h1>
                <input className ="password" type = "password" placeholder='type password here'></input>
                <button onClick={correctPassword}>Submit Password</button>
                <select id="view" name="view">
                    <option value="view">View</option>
                    <option value="edit">Edit</option>
                </select>
            </div>
            <div>
                <StrengthOrWeakness hidden={locked} className="topic-list-profile" category="Strength" bootcamperStrengthAndWeaknessArray={bootcamperStrengthAndWeaknessArray}/>
                <StrengthOrWeakness hidden={locked} className="topic-list-profile" category="Weakness" bootcamperStrengthAndWeaknessArray={bootcamperStrengthAndWeaknessArray}/>
            </div>
        </div>
    </div>        
    )

 }
 
 export default BootcamperProfile