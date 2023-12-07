import lifter from "../images/lifter.png";
import ImageContainer from "./ImageContainer.tsx";
import abWork from "../images/ab.jpg";
import backWork from "../images/back-work.jpg";
import ropeWork from "../images/rope-work.jpg";
import squatting from "../images/squatting.jpg";
import { useState } from "react";

export default function Header() {
const [btnActive, setBtnActive]= useState<boolean>(false)
    function handleBtn ():void{
        setBtnActive(!btnActive)
    }
    console.log(btnActive);
    
  return (
    <header>
      <section>
        <div className="background-color"></div>
        <div className="background-color2"></div>
        <nav>
          <i className="fa-solid fa-dumbbell logo"></i>
          <div className="logo"></div>
          <button id="navbar-btn-id" onClick={()=>handleBtn()}>
         <div>
         <span className={btnActive? 'line':'my-2 line-normal'}></span>
            <span className={btnActive? 'line-2':'my-2 line-normal'}></span>
         </div>
          </button>
          <ul className={btnActive? '.page-links page-links-active translate-active': 'page-links'}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PAGES</li>
            <li>GLASSES</li>
            <li>SHOP</li>
            <li>TRAINERS</li>
            <li>BLOGS</li>
            <li>CONTACT</li>
          </ul>
      
        </nav>
        <div className="main-cont">
          <div className="description">
            <h2>
              <span className="yellow">TIME</span> TO GET{" "}
              <span className="yellow">FIT</span>
            </h2>
            <p>
              The Gym is very important to maintain our health and to achieve
              our goals!{" "}
            </p>
            <button className=" contact-btn">Contact Now</button>
          </div>
          <img src={lifter} alt="main lifting weights" />
        </div>
        <div className="image-container">
          <ImageContainer
            src={backWork}
            name="Back Workout"
            duration="3 SETS, 5minutes"
          />
          <ImageContainer
            src={squatting}
            name="Weight Lifting"
            duration="4 SETS, 5minutes"
          />
          <ImageContainer
            src={abWork}
            name="Abs Fitness"
            duration="3 SETS, 5 minutes"
          />
          <ImageContainer
            src={ropeWork}
            name="Ropes Workout"
            duration="3 SETS, 5minutes"
          />
        </div>
      </section>
    </header>
  );
}
