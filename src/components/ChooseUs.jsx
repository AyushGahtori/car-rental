import MainImg from "../images/chooseUs/main.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  Thrown shy denote ten ladies though ask saw. Or by to he going
                  think order event music. Incommode so intention defective at
                  convinced. Led income months itself and houses you.
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">1</div>
                <div className="text-container__right__box">2</div>
                <div className="text-container__right__box">3</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
