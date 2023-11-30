import ComponentOffered from "./ComponentOffered";

export default function ClassesProvided(){

    return (
        <section className="classes-provided">
            <div className="text-center">
            <h2><span className="yellow">CLASSES</span> WE PROVIDE</h2>
            <p>
Our diverse range of fitness classes caters to all levels and preferences, offering a dynamic and engaging environment where members can achieve their fitness goals while enjoying the camaraderie of group workouts.</p>
                
            </div>
            <div className="component-classes">
                <div> <ComponentOffered /></div>
                <div><ComponentOffered /></div>
                <div><ComponentOffered /></div>
                <div><ComponentOffered /></div>
                <div><ComponentOffered /></div>
                <div><ComponentOffered /></div>
            </div>
        </section>
    )
}