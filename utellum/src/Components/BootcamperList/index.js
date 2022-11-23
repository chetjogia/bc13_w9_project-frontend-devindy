import React from 'react'
import BootcamperItem from '../BootcamperItem'

export function BootcamperList(props){
    return(
        <div>
            {props.bootcamperArray.map(
                (bootcamper) => {return <BootcamperItem bootcamperSW={props.bootcamperSW} key = {bootcamper.id} id={bootcamper.bootcamper_id} image = {bootcamper.image_url} firstName = {bootcamper.first_name} lastName = {bootcamper.last_name} getID={props.getID}/>}
            )}
        </div>
    )
}

export default BootcamperList