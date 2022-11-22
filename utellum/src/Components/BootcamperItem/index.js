import React from 'react'
import './index.css'
import TopicList from '../TopicList'
import {useState} from 'react'
import { strengths_weaknesses } from '../../TestData'




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
            <h1>{props.firstName}</h1>
            <div>
                <TopicList bootcamperStrengthAndWeaknessArray={bootcamperStrengthAndWeaknessArray} />
                
            </div>
            <div className='button-div'>
                <button>View</button>
                <button>Message</button>
            </div>
        </div>
    )
}

export default BootcamperItem