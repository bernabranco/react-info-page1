
import {React, useEffect} from 'react'
import * as THREE from 'three';

export default function Threejs(){

useEffect(() => {

		let scene, camera, renderer;
		let material, geometry, mesh;

		let container = document.getElementById("info-container");
		function init(){
			//create scene and camera
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 0.1, 1000 );
			camera.position.z = 1;

			//create render, canvas and add canvas to dom
			renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight);
			document.body.appendChild( renderer.domElement );
		}

		function render(){
			//create GPU material, geometry and mesh
			material = new THREE.ShaderMaterial( 
			{	   
			uniforms: {
				time: { value: 1.0 },
				resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
				mousex: {value: 0},
				mousey: {value:0}
			},
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'fragmentShader' ).textContent
			} 
		);
		
		geometry = new THREE.PlaneGeometry(5,5,1);
		mesh = new THREE.Mesh( geometry, material );
		scene.add(mesh);
		}

		function animate() {
			requestAnimationFrame( animate );
			renderer.render( scene, camera );
			
			//define shader time
			material.uniforms.time.value += 0.04;	
		};
		
		init();
		render();
		animate();

		//cleanup gl
		geometry.dispose();
		material.dispose();
		renderer.dispose();
			
		//shader interactive with mouse
		// window.addEventListener("mousemove", shaderAnimate);
		// function shaderAnimate(e){
		// 	const canvas = document.querySelector("canvas");
		// 	if (e.pageX >= canvas.getBoundingClientRect().left){
		// 		material.uniforms.mousex.value = e.pageX*0.001;
		// 		material.uniforms.mousey.value = e.pageY*0.001;
		// 	}
		// }

		//shader interactive with scroll
		window.addEventListener("scroll", scrollColor);
		function scrollColor(e){
			material.uniforms.mousex.value = window.pageXOffset*0.01;
			material.uniforms.mousey.value = window.pageYOffset*0.01;
		}
		
	    window.addEventListener('resize', ()=>handleResize());
        function handleResize(){
			// Update camera
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			// Update renderer
		    renderer.setSize(window.innerWidth, window.innerHeight);
		}

        return () => {
			//remove event listeners
			//window.removeEventListener("mousemove", shaderAnimate);
			window.removeEventListener('scroll',handleResize);
			window.removeEventListener('resize',handleResize);
			//remove canvas from tree
			document.body.removeChild(renderer.domElement);	
			//remove gpu assets
			geometry.dispose();
			material.dispose();
			renderer.dispose();
			scene.remove(mesh);
			cancelAnimationFrame(animate);
		}
      },[]);

return(
   null
)

}



