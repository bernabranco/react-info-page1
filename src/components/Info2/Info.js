import {React, useEffect} from 'react'
import './Info.css'
import image1 from '../images/print1.jpg'

export default function Information2(props){

    useEffect(()=>{

        window.addEventListener('scroll', scrollAnimate);
        
        function scrollAnimate(){

            let container = document.getElementById('info2-container');
            let rect = container.getBoundingClientRect();
  
            if (window.pageYOffset >= rect.top && window.pageYOffset <= rect.top + 2*container.clientHeight){
                container.classList.remove('info2-container-start');
                container.classList.add('info2-container');
            } else {
                container.classList.remove('info2-container');
                container.classList.add('info2-container-start');
            }
          }
        
        return ()=>window.removeEventListener('scroll',scrollAnimate);
    })

   return(

    <section id = "info2-container" className="info2-container">
        <div className="info2-wrap">
        <h1 className="heading2">{props.heading}</h1>
        <div className="info2-wrapper">
        <div className = "image-box">
        <img className = "info-image" src={image1} alt = "image2"></img>
        </div>
        <div id = "info2-1" className ="info2-1">
        <p className="text">{props.text1}</p>
        <p className="text">{props.text2}</p>
        </div>
        </div>
        </div>
    </section>

   )
 }

