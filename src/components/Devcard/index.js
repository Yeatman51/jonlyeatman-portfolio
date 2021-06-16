import React from "react";
import './style.css'

function Devcard(props) {
  return (
    
        <div className="dev-info">
            <h1>{props.title}</h1>
            <img src={props.imgSrc} alt={props.alt}/>
            <p>{props.description}</p>
            
            <div class="dev-icon-container">
              
              <div class="dev-icon"> 
                  <a href={props.github} target="_blank" rel="noreferrer">
                  <i class="fab fa-github"></i>
                  <h4>Code</h4></a>
              </div>
              
              <div class="dev-icon">
                  <a href={props.www} target="_blank" rel="noreferrer">
                  <i class="fas fa-globe"></i>
                  <h4>WWW.</h4></a>
              </div>

            </div>
        </div>
  
  );
}

export default Devcard;