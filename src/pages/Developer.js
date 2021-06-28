import React from "react";
import Devcard from "../components/Devcard.js"

import Image1 from '../assets/img/dev-img/treat-home.png'
import Image2 from '../assets/img/dev-img/dingen-home.png'


function Developer() {

  const cards = [
    {
      key: 1,
      title:"Treat YO Shelf",
      imgSrc:{Image1},
      atl:"pic",
      description:"Treat YO Shelf is a user-friendly app that lets you organize your books and and future reading lists",
      github:"https://github.com/hstor3/treat-yo-shelf",
      www:"https://treatyourshelf.herokuapp.com/",
    },
    {
      key: 2,
      title:"DINGEN",
      imgSrc:{Image2},
      atl:"pic",
      description:"DINGEN is a food app design to take the struggle of preparing tonight's dinner",
      github:"https://github.com/Yeatman51/DinGen-Web",
      www:"https://yeatman51.github.io/DinGen-Web/",
    },
    {
      key: 3,
      title:"Coding Quiz",
      imgSrc:"../assets/img/dev-img/dingen-home.png",
      atl:"pic",
      description:"This is a coding quiz designed for Developers in training to review course material",
      github:"https://github.com/Yeatman51/coding-quiz",
      www:"https://yeatman51.github.io/coding-quiz/",
    }
  ]

  const cardsRow2 = [
    {
      key: 4,
      title:"Company Password Generator",
      imgSrc:"src/img/dev-img/home-page.png",
      atl:"pic",
      description:"This webpage is designed to be a quick reference guide to help front in web developers",
      github:"https://github.com/Yeatman51/company-password-generator",
      www:"https://yeatman51.github.io/company-password-generator/",
    },
    {
      key: 5,
      title:"Todo App",
      imgSrc:"./img/dev-img/dingen-home.png",
      atl:"pic",
      description:"This Apple is you to keep track of all of your to do list and keep them organized and different to do categories",
      github:"https://github.com/Yeatman51/todo-app",
      www:"https://yeatman51.github.io/todo-app/",
    },
    {
      key: 6,
      title:"Web Cheat Sheet",
      imgSrc:"src/img/dev-img/web-cheatsheet.png",
      atl:"pic",
      description:"This webpage was designed to be a quick reference guide to help web developers",
      github:"https://github.com/Yeatman51/web-cheatsheet",
      www:"https://yeatman51.github.io/web-cheatsheet/",
    }
  ]

  return (
    <div>
      <div className="developer-text-container">
        <h2 className="developer-text-header">Developer</h2>

        <p className="developer-text-paragraph">

        </p>
    </div>

    <div className="dividers-line"></div>

    <div className="portfolio-container">
    {cards.map(card => (
      <Devcard 
        key={card.key}
        title={card.title}
        imgSrc={card.imgSrc}
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
        key={card2.key}
        title={card2.title}
        imgSrc={card2.imgSrc}
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