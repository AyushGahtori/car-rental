import BgShape from "../images/hero/hero-bg.png";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <p>suuuuui</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
