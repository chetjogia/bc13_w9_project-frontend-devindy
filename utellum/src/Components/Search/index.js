import React from 'react'
import './Search.css'

export function Search({inputHandler}){
    return(
        <div className='search'>
            <input onChange={inputHandler} className='input'></input>
            {/* <button >Search</button> */}
        </div>
    )
}

export default Search