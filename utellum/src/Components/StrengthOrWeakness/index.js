import React from 'react'
import "./index.css"
import {topics} from '../../TestData'


export function StrengthOrWeakness({category, bootcamperStrengthAndWeaknessArray, hidden, addTopic,state, deleteTopic}){
    let strength = true
    let optionid="S"
   
    if(category==="Weakness"){
        strength=false;
        optionid="W"
    }

    console.log("finally here", bootcamperStrengthAndWeaknessArray)

    return(
        <div>
            <div className='strength-profile'>
                <h1>{category}</h1>
                <ul className='topic-profile'>
                    {bootcamperStrengthAndWeaknessArray.map((element)=> element.strength_weakness === strength ? <div>{element.topic_name} <button onClick={()=>deleteTopic(element.unique_id)} hidden={hidden}>x</button></div> : console.log("fail"))}
                </ul>
                <select hidden={hidden} id={optionid} name="SW">
                  {topics.map((topic)=><option value={topic.id}>{topic.topic_name}</option>)}
                </select>
                <button hidden={hidden} onClick={()=>addTopic(document.querySelector(`#${optionid}`).value, strength,state, document.querySelector(`#${optionid}`).options[document.querySelector(`#${optionid}`).selectedIndex].text, bootcamperStrengthAndWeaknessArray)} className='addStrengthOrWeakness'>+</button>
            </div>
          
           

        </div>
      

    )
}

export default StrengthOrWeakness