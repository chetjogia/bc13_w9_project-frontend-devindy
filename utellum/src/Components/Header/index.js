import React from 'react'
import './Header.css'
import logo from './logo-utellum.png'

export function Header(){
    return(
        <header className='header'>
            <div>

            
                <img className='logo' src={logo} alt="Utellum logo"/>
            
                <h1 className='app-name'><a href="/">Utellum</a></h1>

            </div>
        
            <nav>
                <ul>
                    <li><a className="link" href="/">Home</a></li>
                    <li><a className="link" href="/about">About</a></li>
                </ul>
            </nav>
        </header>
      
    )
}

export default Header