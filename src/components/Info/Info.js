import React from 'react'
import './Info.css'
import image1 from './images/print1.jpg'

export default function Information(){

   return(

    <div className="info-container">
        <div className="info-box">
        <div className ="info-1">
            <h1>Who we are</h1>
            <p>We are a digital studio from Porto, Portugal interested in arts</p>

        </div>

        <div className ="info-2">
            <h1>Contacts</h1>
            <p>We are a digital studio from Porto, Portugal interested in arts</p>
        </div>
        </div>
        <div className = "image-box">
        <img src={image1} alt = "image2"></img>
        </div>
    </div>

   )
 }

