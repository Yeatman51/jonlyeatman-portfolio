import React from "react";
import './style.css'

function Footer() {
  return (
    <footer id="footer-relative">
        <br/><br/><br/>
        <div className="wrapper">
            
            <div className="icon-button">
                <div className="icon">
                    <a alt="github" class="icon-anchor" href="https://github.com/Yeatman51" target="_blank">
                    <i class="fab fa-github"></i></a>
                </div>
            
                    <a alt="github" class="icon-anchor" href="https://github.com/Yeatman51" target="_blank">
                    <span class="icon-span">Github</span></a>
                
           </div>

            <div class="icon-button">
                <div class="icon">
                    <a alt="linkedin" class="icon-anchor" href="https://www.linkedin.com/in/jon-yeatman/" target="_blank">
                    <i class="fab fa-linkedin-in"></i></a>
                </div>

                    <a alt="github" class="icon-anchor" href="https://github.com/Yeatman51" target="_blank">
                    <span class="icon-span">LinkedIn</span></a>
                
            </div>

        </div>
      
    </footer>
  
  );
}

export default Footer;