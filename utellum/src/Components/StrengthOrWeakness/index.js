import React from 'react'
import "./index.css"

export function StrengthOrWeakness({category, bootcamperStrengthAndWeaknessArray, hidden}){
    let strength = true
    if(category==="Weakness"){
        strength=false;
    }
    return(
        <div>
            <div className='strength-profile'>
                <h1>{category}</h1>
                <ul className='topic-profile'>
                    {bootcamperStrengthAndWeaknessArray.map((element)=> element.strength_weakness === strength ? <div>{element.topic_name} <button hidden={hidden}>x</button></div> : console.log("fail"))}
                </ul>
            </div>
          
           

        </div>
      

    )
}

export default StrengthOrWeakness