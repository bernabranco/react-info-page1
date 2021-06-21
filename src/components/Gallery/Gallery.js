import {React, useEffect} from 'react'
import './Gallery.css'

import image1 from "./images/print1.jpg";
import image2 from "./images/print2.jpg";
import image3 from "./images/print3.jpg";

export default function Gallery() {

  useEffect(()=>{

    window.addEventListener('scroll', scrollAnimate);
    
    function scrollAnimate(){

        let container = document.getElementById('gallery-container');
        let rect = container.getBoundingClientRect();

        console.log(rect.top);
        console.log(window.pageYOffset);
        console.log(window.pageYOffset>=2*rect.top);

        if (window.pageYOffset >= 2*rect.top && window.pageYOffset <= rect.top + 3*container.clientHeight){
            container.classList.remove('gallery-container-start');
            container.classList.add('gallery-container');
        } else {
            container.classList.remove('gallery-container');
            container.classList.add('gallery-container-start');
        }
      }
    
    return ()=>window.removeEventListener('scroll',scrollAnimate);
})


  let imageBank = [
    {src: image1, id: 'image1', desc: 'Development' },
    {src: image2, id: 'image2', desc: 'Design' },
    {src: image3, id: 'image3', desc: 'Production' },
  ];

  let imageList = imageBank.map(image=>(
    
      <li className = "gallery-li">
        <img className = "gallery-img" src={image.src} key={image.id} alt={image.id}/>
        <p className="gall-text">{image.desc}</p>
      </li>
  
  ))


  return (
    <div>
      <div id = "gallery-container" className="gallery-container">
        <h1 className="gallery-heading">Our Services</h1>
          <ul className = "gallery-ul">{imageList}</ul>
        </div>
      </div>
  );
}


