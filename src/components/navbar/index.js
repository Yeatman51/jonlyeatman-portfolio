import React from "react";
import { Link } from "react-router-dom";
import './style.css'

function Navbar() {
  return (
    <nav>
        <input id="nav-toggle" type="checkbox"></input>
        
        <ul className="links">
            
            <li><Link to="./About">Home</Link></li>
            <li><Link to="./About">Developer</Link></li>
            <li><Link to="./About">Designer</Link></li>
            <li><Link to="./About">Photographer</Link></li>
            <li><Link to="./About">About Me</Link></li>
            
        </ul>

        <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>

    </nav>
  
  );
}

export default Navbar;