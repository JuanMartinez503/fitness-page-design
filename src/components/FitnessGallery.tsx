import backWorkout from '../images/gallery/back-workout.jpg'
import cardioWorkout from '../images/gallery/cardio-workout.jpg'
import chestWorkout from '../images/gallery/chest-workout.jpg'
import legWorkout from '../images/gallery/leg-workout.jpg'
export default function FitnessGallery() {
  return (
    <div className="fitness-gallery">
      <div className="fitness-title">
        <div>
          <h3 className="yellow">Fitness Gallery</h3>
          <h2>
            BELIEVE IN <span className="yellow">YOURSELF,</span>
          </h2>

          <h2>
            <span className="yellow">BE FIT</span> AND HEALTHIER
          </h2>
        </div>
        <div>
          <button>View All</button>
        </div>{" "}
      </div>
      <div className="gallery-pictures">
        <img src={backWorkout} loading="lazy" alt="back workout" />
        <img src={cardioWorkout} loading="lazy" alt="a woman doing cardio" />
        <img src={legWorkout} loading="lazy" alt="a woman doing a leg extension machine" />
        <img src={chestWorkout} loading="lazy" alt="a person doing a chest workout" />
      </div>
    </div>
  );
}
