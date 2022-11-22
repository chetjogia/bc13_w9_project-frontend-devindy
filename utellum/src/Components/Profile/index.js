import React from 'react'
import { useLocation, Link } from "react-router-dom";

export function Profile(){
    
    const { state } = useLocation();
    console.log(state)
    return(<h1>{state.id}</h1>)
}

export default Profile