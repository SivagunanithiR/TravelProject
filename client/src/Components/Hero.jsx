// Hero.js
import React from 'react';
import "./HeroStyles.css";

function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt="HeroImg" src={props.heroImg} />

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button className={props.btnClass} onClick={props.onClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default Hero;