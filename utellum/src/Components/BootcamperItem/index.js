import React from 'react'
import './index.css'
import TopicList from '../TopicList'
import {useState} from 'react'
import { strengths_weaknesses } from '../../TestData'
import {Link} from 'react-router-dom'



export function BootcamperItem(props){

    
    function bootcamperStrengthAndWeakness(){
        const bootcamperStrengthAndWeakness = props.bootcamperSW.filter((element)=>element.bootcamper_id===props.id)
        return bootcamperStrengthAndWeakness
    }

    let bootcamperStrengthAndWeaknessArray = bootcamperStrengthAndWeakness()



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
                <button className="link-view" onClick={()=>{return props.getID(props.id)}}>View</button>
            </Link>
            <Link>
                 <button className="link-message">Message</button>
            </Link>
              
            </div>
        </div>
    )
}

export default BootcamperItem