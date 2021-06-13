import React from "react";
import './style.css'

function Home() {
  return (
    <div>
        <div className="cont-profile-pic">
            <img className="profile-pic" 
            src="img/yeatman-profile-picture.jpg" 
            alt="Jon Yeatman Profile"/>
        </div>
        
        <dir className="about-text-home">
            <p>
                Experienced Business Owner with a demonstrated history of working in the computer software and graphics industry. 
                Skilled in Business Planning, Operations Management, Web Design, HTML, CSS, and JavaScript. Strong operations professional with 
                a Certificate focused in Full Stack Web Development from Michigan State University. 
            </p>
        </dir>
        
        <div className="line"></div>

        <div className="icon-header">
            <h3>
                The development technology and designing software I use at a quick glance
            </h3>
        </div>

        <div className="code-logos-container">
            <div className="code-logos">
                <img src="./public/img/icons/code/code-html.png" alt="HTML Logo"/>
                <h3>HTML</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/code/code-css.png" alt="CSS Logo"/>
                <h3>CSS</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/code/code-js.png" alt="JavaScript Logo"/>
                <h3>JavaScript</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/code/code-gsap.png" alt="Greensock Logo"/>
                <h3>Greensock</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/code/code-bs.png" alt="Bootstrap Logo"/>
                <h3>Bootstrap</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/code/code-tw.png" alt="Tailwind Logo"/>
                <h3>Tailwind</h3>
            </div>
            
        </div>

        <div className="line"></div>

        <div className="design-logos">
            <div className="code-logos">
                <img src="./public/img/icons/SVG/adobe-ai.png" alt="Illustrator Logo"/>
                <h3>Illustrator</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/SVG/adobe-xd.png" alt="XD Logo"/>
                <h3>XD</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/SVG/adobe-ps.png" alt="Photoshop Logo"/>
                <h3>Photoshop</h3>
            </div>
        
            <div className="code-logos">
                <img src="./public/img/icons/SVG/adobe-id.png" alt="InDesign Logo"/>
                <h3>InDesign</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/SVG/adobe-lr.png" alt="Lightroom Logo"/>
                <h3>Lightroom</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/SVG/adobe-pr.png" alt="Premiere Pro Logo"/>
                <h3>Premiere Pro</h3>
            </div>

            <div className="code-logos">
                <img src="./public/img/icons/SVG/adobe-ae.png" alt="After Effects Logo"/>
                <h3>After Effects</h3>
            </div>

        </div>

        <div className="email">
            <h3>jonlyeatman@gmail.com</h3>
        </div>

    </div>
  
  );
}

export default Home;