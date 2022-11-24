import React from "react"
import './index.css'
import chet_profile from './Website.jpg'

function About(){

return(
    <div>

<div className="author">
    <img className='profile-pic-about' src={chet_profile} alt="profile"></img>
    <div className='author-info'>
        <div>
            <h1 className="about-me">Alex Chappell</h1>

        </div>
        <div>
            <p className="ten-second">ten second chat</p>
        </div>
    </div>
    </div>
    <div className="author">
    <img className='profile-pic-about' src={chet_profile} alt="profile"></img>
    <div className='author-info'>
        <div>
            <h1 className="about-me">Chetan Jogia</h1>

        </div>
        <div>
            <p className="ten-second">ten second chat</p>
        </div>
    </div>
    </div>
    <div className="author">
    <img className='profile-pic-about' src={chet_profile} alt="profile"></img>
    <div className='author-info'>
        <div>
            <h1 className="about-me">Jason Riley</h1>

        </div>
        <div>
            <p className="ten-second">ten second chat</p>
        </div>
    </div>
    </div>
    <div className="author">
    <img className='profile-pic-about' src={chet_profile} alt="profile"></img>
    <div className='author-info'>
        <div>
            <h1 className="about-me">Luke Adams</h1>

        </div>
        <div>
            <p className="ten-second">ten second chat</p>
        </div>
    </div>
    </div>

    </div>
   
  
)

}

export default About