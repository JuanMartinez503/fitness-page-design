import manAndWoman from '../images/man-and-woman.jpg'
export default function Trainers (){

    return (
        <div className="trainer-content">
            <img src={manAndWoman} alt='man and woman flexing' />
            <div className="equipment">
                <h3 className='yellow'>Science 2005</h3>
                <h2>BEST <span className="yellow">EQUIPMENTS & FITNESS TRAINERS</span></h2>
                <p>Regular gym workouts are crucial for maintaining physical health and well-being as they contribute to cardiovascular fitness, muscle strength, and flexibility. Beyond the physical benefits, the gym also serves as a valuable space for stress relief and mental rejuvenation, promoting a holistic approach to a healthy lifestyle.</p>
                <ul>
                    <li>Builds Aerobic Power</li>
                    <li>Strong body Structure</li>
                    <li>Boost your memory</li>
                    <li>Achieve restful Sleep</li>
                </ul>
                <div>
                    <button>LET'S START</button>
                    <span>INTRO VIDEO</span>
                </div>
            </div>
        </div>
    )
}