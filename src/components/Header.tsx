import lifter from '../images/lifter.png'
import ImageContainer from './ImageContainer.tsx'
import abWork from '../images/ab.jpg'
import backWork from  '../images/back-work.jpg'
import ropeWork from '../images/rope-work.jpg'
import squatting from '../images/squatting.jpg'



export default function Header(){

    return(
        <header>
            <section>
            <div className="background-color"></div>
            <div className="background-color2"></div>
            <nav>
                <div className="logo">Page logo</div> 
                <ul className="page-links">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PAGES</li>
                    <li>GLASSES</li>
                    <li>SHOP</li>
                    <li>TRAINERS</li>
                    <li>BLOGS</li>
                    <li>CONTACT</li>
                <div className="checkout">cart</div>

                </ul>
            </nav>
            <div className="main-cont">
              <div className="description">
              <h2><span className="yellow">TIME</span> TO GET <span className="yellow">FIT</span></h2>
              <p>The Gym is very important to maintain our health and to achieve our goals! </p>
              <button className=' contact-btn'>Contact Now</button>

              </div>
                <img src={lifter} alt="main lifting weights" />
            </div>
            <div className="image-container">
            <ImageContainer src={backWork} name='Back Workout' duration='3 SETS, 5minutes'/>
            <ImageContainer src={squatting} name='Weight Lifting' duration='4 SETS, 5minutes'/>
            <ImageContainer src={abWork} name='Abs Fitness' duration='3 SETS, 5 minutes'/>
            <ImageContainer src={ropeWork} name='Ropes Workout' duration='3 SETS, 5minutes'/>
            </div>

            </section>
         
        </header>
    )
}