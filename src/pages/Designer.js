import React from "react";


function Designer() {
  return (
    <div>
      <div className="designer-text-container">
        <h2 className="designer-text-header">Designer</h2>

        <p className="designer-text-paragraph">

        </p>
      </div>

      <div className="dividers-line"></div>
        
      <div class="gd-gallery">

        <div class="gd-gallery-img">
          <img src={process.env.PUBLIC_URL + "/images/yeatman-logo.png"} alt="test"/>
        </div>

      </div>

    </div>
  
  );
}

export default Designer;