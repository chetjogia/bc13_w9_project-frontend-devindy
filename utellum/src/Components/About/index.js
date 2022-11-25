import React from "react"
import './index.css'
import chet_profile from './Website.jpg'
import alex from './Alex photo/IMG_4884.jpg'
import jason from './Jason Photo/PictureOfMe (3).png'
import luke from './Luke photo/image (6).png'

function About(){

return(
    <div>

<div className="author">
    <img className='profile-pic-about' src={alex} alt="profile"></img>
    <div className='author-info'>
        <div>
            <h1 className="about-me">Alex Chappell</h1>

        </div>
    
    </div>
    </div>
    <div className="author">
    <img className='profile-pic-about' src={chet_profile} alt="profile"></img>
    <div className='author-info'>
        <div>
            <h1 className="about-me">Chetan Jogia</h1>

        </div>
        
    </div>
    </div>
    <div className="author">
    <img className='profile-pic-about' src={jason} alt="profile"></img>
    <div className='author-info'>
        <div>
            <h1 className="about-me">Jason Riley</h1>

        </div>
     
    </div>
    </div>
    <div className="author">
    <img className='profile-pic-about' src={luke} alt="profile"></img>
    <div className='author-info'>
        <div>
            <h1 className="about-me">Luke Adams</h1>

        </div>
     
    </div>
    </div>

    </div>
   
  
)

}

export default About