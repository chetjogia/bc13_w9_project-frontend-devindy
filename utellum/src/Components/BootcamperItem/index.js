import React from 'react'
import './index.css'
import TopicList from '../TopicList'
import {useState} from 'react'
import { strengths_weaknesses } from '../../TestData'
import {Link} from 'react-router-dom'



export function BootcamperItem(props){

    
    function bootcamperStrengthAndWeakness(){
        const bootcamperStrengthAndWeakness = strengths_weaknesses.filter((element)=>element.bootcamper_ID===props.id)
        return bootcamperStrengthAndWeakness
    }

    let bootcamperStrengthAndWeaknessArray = bootcamperStrengthAndWeakness()
    console.log("SW",bootcamperStrengthAndWeaknessArray)


    return(
        <div className='bootcamper-item'>
            <img src={props.image} alt="profile"></img>
            <div>
                <h1>{props.firstName}</h1>
                <h1>{props.lastName}</h1>
            </div>
         
            <div>
                <TopicList bootcamperStrengthAndWeaknessArray={bootcamperStrengthAndWeaknessArray} />
                
            </div>
            <div className='button-div'>
            <Link   to={`/profile/${props.id}`}  state={{id: props.id}}>
                <button  onClick={()=>{return props.getID(props.id)}}>View</button>
            </Link>
                <button>Message</button>
            </div>
        </div>
    )
}

export default BootcamperItem