import React from 'react'
import "./index.css"

export function TopicList({bootcamperStrengthAndWeaknessArray}){
    console.log("topiclist", bootcamperStrengthAndWeaknessArray)
    return(
        <div>
            <div className='strength'>
                <h1>Strengths</h1>
                <ul>
                    {bootcamperStrengthAndWeaknessArray.map((element)=> element.strength_weakness === true ? <li>{element.topic_name}</li> : console.log("fail"))}
                </ul>
            </div>
           <div className='weakness'>
                <h1>Weaknesses</h1>
                <ul>
                    {bootcamperStrengthAndWeaknessArray.map((element)=> element.strength_weakness === false ? <li>{element.topic_name}</li> : console.log("fail"))}
                </ul>
           </div>
           

        </div>
      

    )
}

export default TopicList