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
            <div className='bootcamper-left-half'>
                <img className='profile-pic' src={props.image} alt="profile"></img>
                <div className='bootcamper-info'>
                    <div>
                        <p className="bootcamper-one">{props.firstName}</p>
                        <p className="bootcamper-one">{props.lastName}</p>
                    </div>
                    <div className='button-div'>
                        <Link to={`/profile/${props.id}`} state={{id: props.id}}>
                          <button className="info-button" onClick={()=>{return props.getID(props.id)}}>View</button>
                        </Link>
                        <button className="info-button">Message</button>
                    </div>
                </div>
            </div>
            <div className="bootcamper-right-half">
                <TopicList bootcamperStrengthAndWeaknessArray={bootcamperStrengthAndWeaknessArray} />
            </div>
        </div>
    )
}

export default BootcamperItem