import {React, useEffect} from 'react'
import './Info.css'
import image1 from '../images/print1.jpg'

export default function Information1(props){

    //effect for during page navigation
    useEffect(()=>{

        window.addEventListener('scroll', scrollAnimate);

        function scrollAnimate(){
            let container = document.getElementById('info1-container');

            let rect = container.getBoundingClientRect();

            if (window.pageYOffset >= rect.top && window.pageYOffset <= rect.top + container.clientHeight){
                container.classList.remove('info1-container-start');
                container.classList.add('info1-container');
            } else {
                container.classList.remove('info1-container');
                container.classList.add('info1-container-start');
            }
          }
        
    return ()=>window.removeEventListener('scroll',scrollAnimate);
    })

    return(

    <section id ='info1-container' className="info1-container">
       <div className = "info1-wrap">
       <h1 className="heading1">{props.heading}</h1>
       <div className = "info1-wrapper">
       <div className = "image-box">
        <img className = "info-image" src={image1} alt = "image2"></img>
        </div>
        <div id = 'info1-1' className ="info1-1">
            <p className="text">{props.text1}</p>
        </div>
        </div>
        </div>
    </section>

   )
 }

