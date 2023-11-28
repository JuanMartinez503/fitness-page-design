import lifter from '../images/lifter.png'


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
            </section>
         
        </header>
    )
}