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
            <h4 className="yellow">Operation hours</h4>
            <p className='py-2'><strong>Monday - Friday :</strong> 7AM-10PM</p>
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
            </div>
            <div className="footer-flex">
                <h2>NEWSLETTER</h2>
            </div>
        </footer>
    )
}