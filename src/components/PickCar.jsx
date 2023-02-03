import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [active, setActive] = useState("SecondCar");

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                To contribute to positive change and achieve our sustainability
                goals with many extraordinary
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                <button onClick={() => setActive("SecondCar")}>
                  Audi A1 S-Line
                </button>
                <button onClick={() => setActive("FirstCar")}>VW Golf 6</button>
                <button onClick={() => setActive("ThirdCar")}>
                  Toyota Camry
                </button>
                <button onClick={() => setActive("FourthCar")}>
                  BMW 320 MedernLine
                </button>
                <button onClick={() => setActive("FifthCar")}>
                  Mercedes-Benz GLK
                </button>
                <button onClick={() => setActive("SixthCar")}>
                  VW Passat CC
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
