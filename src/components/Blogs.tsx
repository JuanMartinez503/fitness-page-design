import BlogsArticles from "./BlogsArticles.tsx";
import yoga from '../images/classes/yoga.jpg'
import fitness from '../images/classes/fitness-class.jpg'
import bodyBuilding from '../images/classes/bodybuilding.jpg'
export default function Blogs (){

    return (
        <div className="blogs">
            <h2>LATEST <span className="yellow">BLOG POST</span></h2>
            <p>In our latest blog post, we delve into cutting-edge fitness trends, offering valuable insights and expert tips to inspire and guide you on your journey toward a healthier and more active lifestyle.</p>

            <div className="blogs-articles">
                <BlogsArticles title="Perfect Workout is the way to shape your body and mind" category="Fitness" src={fitness} date="05 SEPT, 2023" />
                <BlogsArticles title="Yoga is important for body and mind refreshments" category="Yoga" src={yoga} date="23 AUGUST, 2023" />
                <BlogsArticles title="Give more time in a workout for a great shape that you want" category="Body Building" src={bodyBuilding} date="15 JULY, 2022" />
            </div>
        </div>
    )
}