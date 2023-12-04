import { type FormEventHandler, useState, FormEvent } from "react";
import robert from "../images/discount.jpg";
export default function BMICalculator() {
  const [weight, setWeight] = useState<number | string>("");
  const [height, setHeight] = useState<number | string>("");
  const [result, setResult] = useState<number>(0.0);

  const bmiCalculatorDiv: React.CSSProperties = {
    backgroundImage: `url(${robert})`,
  };
  //BMI equation = weight(lb)/(height(in))**2 *703
  function getHeight(e: FormEvent<HTMLInputElement>) {
    setHeight(e.currentTarget.value);
  }
  function getWeight(e: FormEvent<HTMLInputElement>) {
    setWeight(e.currentTarget.value);
  }

  function calculateBMI(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const weightNumber = parseFloat(weight.toString());
    const heightNumber = parseFloat(height.toString());
    if (weightNumber > 0 && heightNumber > 0) {
      const resultValue: number =
        (weightNumber / (heightNumber * heightNumber)) * 703;
      setResult(resultValue);
    }
  }

  return (
    <div className="calculator-container">
      <div className="testimonial">
        <h3>Testimonials</h3>
        <h2>
          {" "}
          THAT'S <span className="yellow">WHAT OUR CLIENT SAYS</span>
        </h2>
        <p>
          "After joining this gym, my fitness journey reached new heights! The
          expert trainers and state-of-the-art equipment made every workout
          enjoyable, and the supportive community here motivated me to surpass
          my fitness goals in no time."
        </p>
        <h4>-Stephen Flaming</h4>
        <div>Maryland, USA</div>
        <div className="bmi-play">
          <i className="fa-solid fa-play yellow"></i>
          <i className="fa-solid fa-play yellow"></i>
          <i className="fa-solid fa-play yellow"></i>
          <i className="fa-solid fa-play yellow"></i>
        </div>
        <div className="bmi-play-2">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
      <div className="calculator" style={bmiCalculatorDiv}>
        <form onSubmit={calculateBMI}>
          <h3 className="text-center">
            BMI <span className="yellow">CALCULATOR</span>
          </h3>
          <p className="text-center p-3">
            BMI is a reliable guide to estimate the healthy weight range based
            on height and weight
          </p>
          <div className="input-container">
            <input
              type="number"
              name="height"
              value={height}
              onChange={getHeight}
              id="height"
              placeholder="Height(in)"
            />
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={getWeight}
              id="weight"
              placeholder="Weight(lb)"
            />
          </div>
          <div className="result">
            <button type="submit" className="btn">
              CALCULATE
            </button>
            <h2>{result && <div>{result.toLocaleString()}</div>}</h2>
          </div>
        </form>
        <div className="bmi-table">
          <h5>BMI TABLE</h5>
          <div className="bmi-number">
            <h6>BMI</h6>
            <p>Below 18.5</p>
            <p>18.5-24.5</p>
            <p>25.0-29.9</p>
            <p>30 and Above</p>
          </div>
          <div className="weight-status">
            <h6>Weight Status</h6>
            <p>Underweight</p>
            <p>Healthy Weight</p>
            <p>Overweight</p>
            <p>Obesity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
