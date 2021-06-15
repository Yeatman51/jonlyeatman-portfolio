import React from "react";
import './style.css'
import Devcard from "../../components/Devcard"

function Developer() {

  const cards = [
    {
      title:"Treat YO Shelf",
      ingUrl:"src/img/dev-img/home-page.png",
      atl:"pic",
      description:"Treat YO Shelf is a user-friendly app that lets you organize your books and and future reading lists",
      github:"",
      www:"https://treatyourshelf.herokuapp.com/",
    },
    {
      title:"DINGEN",
      ingUrl:"#",
      atl:"pic",
      description:"DINGEN is a food app design to take the struggle of preparing tonight's dinner",
      github:"",
      www:"",
    },
    {
      title:"Coding Quiz",
      ingUrl:"#",
      atl:"pic",
      description:"This is a coding quiz designed for Developers in training to review course material",
      github:"",
      www:"",
    }
  ]

  const cardsRow2 = [
    {
      title:"Company Password Generator",
      ingUrl:"src/img/dev-img/home-page.png",
      atl:"pic",
      description:"This webpage is designed to be a quick reference guide to help front in web developers",
      github:"https://github.com/Yeatman51/company-password-generator",
      www:"https://yeatman51.github.io/company-password-generator/",
    },
    {
      title:"Todo App",
      ingUrl:"#",
      atl:"pic",
      description:"This Apple is you to keep track of all of your to do list and keep them organized and different to do categories",
      github:"https://github.com/Yeatman51/todo-app",
      www:"https://yeatman51.github.io/todo-app/",
    },
    {
      title:"Web Cheat Sheet",
      ingUrl:"#",
      atl:"pic",
      description:"This webpage was designed to be a quick reference guide to help web developers",
      github:"https://github.com/Yeatman51/web-cheatsheet",
      www:"https://yeatman51.github.io/web-cheatsheet/",
    }
  ]

  return (
    <div>
      <div class="developer-text-container">
        <h2 class="developer-text-header">Developer</h2>

        <p class="developer-text-paragraph">

        </p>
    </div>

    <div class="line"></div>

    <div className="portfolio-container">
    {cards.map(card => (
      <Devcard 
        title={card.title}
        imgUrl={card.imgUrl}
        alt={card.alt}
        description={card.description}
        github={card.github}
        www={card.www}
      /> 
    ))}
    </div>

    <div className="portfolio-container-row">
    {cardsRow2.map(card2 => (
      <Devcard 
        title={card2.title}
        imgUrl={card2.imgUrl}
        alt={card2.alt}
        description={card2.description}
        github={card2.github}
        www={card2.www}
      /> 
    ))}

    </div>

    </div>
  
  );
}

export default Developer;