import React from 'react'
import BootcamperItem from '../BootcamperItem'

export function BootcamperList(props){
    console.log("bootcamper Array", props.bootcamperArray)
    return(
        <div>
            {props.bootcamperArray.map(
                (bootcamper) => {return <BootcamperItem key = {bootcamper.id} id={bootcamper.id} image = {bootcamper.image_url} firstName = {bootcamper.first_name}/>}
            )}
        </div>
    )
}

export default BootcamperList