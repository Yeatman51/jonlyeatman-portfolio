import React from "react";
import './style.css'

function Footer() {
  return (
    <footer id="footer-relative">
        <br/><br/><br/>
        <div className="wrapper">
            
            <div className="icon-button">
                <div className="icon">
                    <a alt="github" className="icon-anchor" href="https://github.com/Yeatman51" target="_blank">
                    <i className="fab fa-github"></i></a>
                </div>
            
                    <a alt="github" className="icon-anchor" href="https://github.com/Yeatman51" target="_blank">
                    <span className="icon-span">Github</span></a>
                
           </div>

            <div className="icon-button">
                <div className="icon">
                    <a alt="linkedin" className="icon-anchor" href="https://www.linkedin.com/in/jon-yeatman/" target="_blank">
                    <i className="fab fa-linkedin-in"></i></a>
                </div>

                    <a alt="github" className="icon-anchor" href="https://github.com/Yeatman51" target="_blank">
                    <span className="icon-span">LinkedIn</span></a>
                
            </div>

        </div>
      
    </footer>
  
  );
}

export default Footer;