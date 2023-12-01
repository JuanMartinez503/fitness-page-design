import InstructorComponent from "./InstructorComponent";
import olivia from '../images/trainers/olivia.jpg'
import jennifer from '../images/trainers/jennifer.jpg'
import robert from '../images/trainers/robert.jpg'
import smith from '../images/trainers/smith.jpg'

export default function Instructors (){
    return (
        <div className="instructors">
            <div className="professional">
                <h2>PROFESSIONAL <span className="yellow">INSTRUCTORS</span></h2>
                <p>Our team of professional gym instructors brings a wealth of expertise and dedication, ensuring personalized guidance, motivation, and a tailored fitness experience for each member, empowering them to achieve their health and wellness goals with confidence.</p>
            </div>
            <div className="instructor-flex-component">
                <InstructorComponent src={robert} role="Bodybuilding Instructor" name="Robert Christopher" />
                <InstructorComponent src={olivia} role="Fitness Instructor" name="Olivia Williams" />
                <InstructorComponent src={smith} role="Cross fit Instructor" name="Nick Smit" />
                <InstructorComponent src={jennifer} role="Aerobic Instructor" name="Jennifer Parker" />
            </div>
        </div>
    )
}