import manAndWoman from "../images/man-and-woman.jpg";
import discountMan from '../images/discount.jpg'
export default function Trainers() {
    const discountBackgroundDiv:React.CSSProperties = {
        backgroundImage: `url(${discountMan})`,
        backgroundPosition:'center',
        backgroundSize:'cover'
    }

  return (
    <div className="trainer-content">
      <div className="man-and-woman">
        <img src={manAndWoman} alt="man and woman flexing" />
        <div className="play-div play-div-1">
          <i className="fa-solid fa-play yellow"></i>
          <i className="fa-solid fa-play yellow"></i>
          <i className="fa-solid fa-play yellow"></i>
          <i className="fa-solid fa-play yellow"></i>
        </div>
        <div className="play-div play-div-2">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-play"></i>
        </div>
        <div className="play-div play-div-3">
          <i className="fa-solid fa-play yellow"></i>
          <i className="fa-solid fa-play yellow"></i>
          <i className="fa-solid fa-play yellow"></i>
          <i className="fa-solid fa-play yellow"></i>
        </div>
        <div className="play-div play-div-4">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
      <div className="equipment">
        <h3 className="yellow">Science 2005</h3>
        <h2>
          BEST <span className="yellow">EQUIPMENTS & FITNESS TRAINERS</span>
        </h2>
        <p>
          Regular gym workouts are crucial for maintaining physical health and
          well-being as they contribute to cardiovascular fitness, muscle
          strength, and flexibility. Beyond the physical benefits, the gym also
          serves as a valuable space for stress relief and mental rejuvenation,
          promoting a holistic approach to a healthy lifestyle.
        </p>
        <ul>
          <li>Builds Aerobic Power</li>
          <li>Strong body Structure</li>
          <li>Boost your memory</li>
          <li>Achieve restful Sleep</li>
        </ul>
        <div className="button-and-play">
          <button>LET'S START</button>
          <div className="intro-video">
            <div className="play-video">
              <i className="fa-solid fa-play play-icon"></i>
            </div>
            <p>INTRO VIDEO</p>
          </div>
        </div>
      </div>
      <div className="discount-offer  ">
        <div className="offer-equipment ">
          <div className="other-equipment">
            <h2>Best Training</h2>
            <p>
              At our gym, we pride ourselves on delivering the best training
              experience by offering personalized workout programs, expert
              guidance from certified trainers, and state-of-the-art facilities,
              ensuring our members achieve their fitness goals with unparalleled
              support and results.
            </p>
          </div>
          <div className="other-equipment">
            <h2>Qualified Instructor</h2>
            <p>
              Our gym boasts a team of highly qualified instructors who bring a
              wealth of expertise and passion, ensuring members receive
              top-notch guidance and motivation to optimize their fitness
              journey.
            </p>
          </div>
          <div className="other-equipment">
            <h2>Latest Equipment</h2>
            <p>
              Equipped with the latest cutting-edge fitness technology, our gym
              provides a premier workout experience, allowing members to harness
              the power of state-of-the-art equipment for effective and
              enjoyable training sessions.
            </p>
          </div>
          <div className="other-equipment">
            <h2> Award Winners</h2>
            <p>
              Proud recipients of prestigious fitness industry awards, our gym
              stands as a recognized leader, celebrated for its commitment to
              excellence, innovation, and unwavering dedication to delivering
              outstanding fitness services to our valued members.
            </p>
          </div>
        </div>
        <div className="percentage-picture" style={discountBackgroundDiv}>
            <div>
                <span>35%</span>
                <p>DISCOUNT</p>
            </div>
        </div>
      </div>
    </div>
  );
}
