import React from "react";

// import { gsap } from "gsap/dist/gsap";

// gsap.fromTo(
//   ".yeatman-logo",
//   { opacity: 0, y: 100, scale: 0 },
//   { opacity: 1, y: 0, scale: 1, duration: 2.0 }
// );

// gsap.fromTo(
//   ".header-text",
//   { opacity: 0, y: -100, scale: 0 },
//   { opacity: 1, y: 0, scale: 1, delay: 1, duration: 2.0 }
// );

function Header() {
  return (
    <header>
      <div className="yeatman-logo"></div>

      <h1 className="header-text">
      Full Stack Web Developer<br></br>
      Graphic Designer
      </h1>
    </header>
  
  );
}

export default Header;