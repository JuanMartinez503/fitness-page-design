import back from '../images/gallery/back-workout.jpg'
export default function Footer (){

    const backgroundDiv:React.CSSProperties = {
        backgroundImage: `url(${back})`
    }
    return (
        <footer style={backgroundDiv}>
            <div className="footer-flex">
            <i className="fa-solid fa-dumbbell logo"></i>
            <p className='my-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptatem tempora sint perferendis sit praesentium accusamus ea
            </p>
            <h4 className="yellow w-100">Operation hours</h4>
            <p className='py-2 w-100'><strong>Monday - Friday :</strong> 7AM-10PM</p>
            <p><strong>Saturday - Sunday : </strong>9AM - 8PM</p>
            </div>
            <div className="footer-flex">
                <h2>USEFUL LINKS</h2>
                <ul>
                    <li>About Us</li>
                    <li>Membership</li>
                    <li>Our Classes</li>
                    <li>Instructors</li>
                    <li>Shop</li>
                    <li>Blog Post</li>
                    <li>Schedules</li>
                    <li>Payments</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-flex">
                <h2>CONTACT INFO</h2>
                <div className='d-flex'>
                    <h1 className="yellow">
                    <i className="fa-solid fa-location-dot "></i>
                    </h1>
                    <div className='mx-1'>
                        <h4 className="yellow">Address</h4>
                        <p>252B, Central Street Main road <br /> Belix Tower, New York, USA</p>
                    </div>

                </div>
                <div className='d-flex'>
                    <h1 className="yellow">
                    <i className="fa-solid fa-phone"></i>
                    </h1>
                    <div className='mx-1'>
                        <h4 className="yellow">Phone</h4>
                  <p>+1 (123) 456-7890</p>
                  <p>+1 (123) 456-7890</p>

                    </div>

                </div>
                <div className='d-flex'>
                    <h1 className="yellow">
                    <i className="fa-solid fa-globe"></i>
                    </h1>
                    <div className='mx-1'>
                        <h4 className="yellow">Web</h4>
                   <p>info@exercise.com</p>
                   <p>www.example.com</p>
                    </div>

                </div>
            </div>
            <div className="footer-flex">
                <h2>NEWSLETTER</h2>
                <p>Subscribe to our newsletter to stay up to date with our location and our hours of operation. </p>

                <input type="text" placeholder='Enter Email' /><button><i className="fa-regular fa-paper-plane"></i></button>
                <div className=" social-footer">
                <div><i className="fa-brands fa-facebook"></i></div>
                <div> <i className="fa-solid fa-phone"></i></div>
                <div> <i className="fa-brands fa-instagram"></i></div>
                <div> <i className="fa-brands fa-twitter"></i></div>
            </div>
            <div className="text-center my-4">
                <div className='my-2'>Designed: <a href="https://www.behance.net/gallery/182788853/Fitness-Website-Design" target="_blank" rel="noopener noreferrer">Jeremy Johnson</a></div>
                <p>Developed: <a href="http://juanmartinez.io" target="_blank" rel="noopener noreferrer">Juan Martinez</a></p>
            </div>
            </div>
      
        </footer>
    )
}