import ComponentOffered from "./ComponentOffered";

import yoga from '../images/classes/yoga.jpg'
import crossfit from '../images/classes/crossfit.jpg'
import cardio from '../images/classes/cardio.jpg'
import martialArts from '../images/classes/martial-arts.jpg'
import bodybuilding from '../images/classes/bodybuilding.jpg'
import fitnessClass from '../images/classes/fitness-class.jpg'

export default function ClassesProvided(){

    return (
        <section className="classes-provided">
            <div className="text-center">
            <h2><span className="yellow">CLASSES</span> WE PROVIDE</h2>
            <p>
Our diverse range of fitness classes caters to all levels and preferences, offering a dynamic and engaging environment where members can achieve their fitness goals while enjoying the camaraderie of group workouts.</p>
                
            </div>
            <div className="component-classes">
                <div> <ComponentOffered src={bodybuilding} duration="50 Minutes" className="BODY BUILDING CLASS"/></div>
                <div><ComponentOffered src={fitnessClass} duration="45 Minutes" className={'FITNESS CLASS'}/></div>
                <div><ComponentOffered src={yoga} duration="35 Minutes" className="YOGA CLASS"/></div>
                <div><ComponentOffered src={crossfit} duration="55 Minutes" className="CROSS FIT CLASS"/></div>
                <div><ComponentOffered src={martialArts} duration="50 Minutes" className="MARTIAL ARTS CLASS"/></div>
                <div><ComponentOffered src={cardio} duration="30 Minutes" className="CARDIO CLASS"/></div>
            </div>
        </section>
    )
}