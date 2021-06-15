import React from "react";
import './style.css'
import Devcard from "../../components/Devcard"

function Developer() {
  return (
    <div>
      <div class="developer-text-container">
        <h2 class="developer-text-header">Developer</h2>

        <p class="developer-text-paragraph">

        </p>
    </div>

    <div class="line"></div>

    <div className="portfolio-container">
      <Devcard 
        title=""
        imgUrl=""
        alt=""
        description=""
      />

      <Devcard 
        title=""
        imgUrl=""
        alt=""
        description=""
      />

      <Devcard 
        title=""
        imgUrl=""
        alt=""
        description=""
      /> 
    </div>

    <div className="portfolio-container-row">
      <Devcard 
        title=""
        imgUrl=""
        alt=""
        description=""
      /> 

      <Devcard 
        title=""
        imgUrl=""
        alt=""
        description=""
      />

      <Devcard 
        title=""
        imgUrl=""
        alt=""
        description=""
      />

    </div>

    </div>
  
  );
}

export default Developer;