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

    

    for(let i=0; i<bootcamperStrengthAndWeaknessArray.length; i++){
       for(let j=0; j<topics.length; j++){
        console.log(bootcamperStrengthAndWeaknessArray[i])
            if(bootcamperStrengthAndWeaknessArray[i].topic_name===topics[j].topic_name){
                bootcamperStrengthAndWeaknessArray[i].topic_color=topics[j].topic_color
            }
       }
    }

    console.log("finally here", bootcamperStrengthAndWeaknessArray)

    return(
        <div>
            <div className='strength-profile'>
                <h1>{category}:</h1>
                <ul className='topic-profile'>
                    {bootcamperStrengthAndWeaknessArray.map((element)=> element.strength_weakness === strength ? <div className="topic-box" style={{backgroundColor: element.topic_color}}><div className="topic-name-SW">{element.topic_name}</div><div hidden={hidden} className="delete-SW"> <button className="delete-topic" onClick={()=>deleteTopic(element.unique_id)} hidden={hidden}>x</button></div></div> : console.log("fail"))}
                </ul>
                <div className='topic-dropdown-button'>
                <select hidden={hidden} id={optionid} name="SW">
                  {topics.map((topic)=><option value={topic.id}>{topic.topic_name}</option>)}
                </select>
                <button hidden={hidden} onClick={()=>addTopic(document.querySelector(`#${optionid}`).value, strength,state, document.querySelector(`#${optionid}`).options[document.querySelector(`#${optionid}`).selectedIndex].text, bootcamperStrengthAndWeaknessArray)} className='addStrengthOrWeakness'>+</button>

                </div>
                
            </div>
          
           

        </div>
      

    )
}

export default StrengthOrWeakness