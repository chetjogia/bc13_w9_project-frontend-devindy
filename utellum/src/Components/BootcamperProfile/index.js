import React from 'react'
import { useLocation, Link } from "react-router-dom";
 
export function BootcamperProfile(props) {    
    const { state } = useLocation();
    let bootcamperArray = props.bootcamperArray
    let bootcamper = bootcamperArray.filter((element)=>{
        return element.id===state.id})





        console.log(state)
        return(
        
        
        <div>
            <img src={bootcamper[0].image_url} alt = "profile"></img>
            <h1>{bootcamper[0].first_name} {bootcamper[0].last_name}</h1>
        </div>        
        )

 }
 
 export default BootcamperProfile