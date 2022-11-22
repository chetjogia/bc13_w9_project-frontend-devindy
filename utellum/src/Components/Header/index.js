import React from 'react'
import './Header.css'

export function Header(){
    return(
        <header className='header'>
            <div>
                <img className='logo' src="" alt="logo"/>
                <h1>Utellum</h1>
            </div>
        
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
      
    )
}

export default Header