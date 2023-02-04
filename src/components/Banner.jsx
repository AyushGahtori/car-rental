function Banner() {
  return (
    <>
      <section className="banner-section">
        <div className="overlay">
          <div className="container">
            <div className="banner-content">
              <div className="img-side"></div>
              <div className="text-side">
                <div>
                  <h2>Save big with our cheap car rental!</h2>
                  <p>Top Airports. Local Suppliers. 24/7 Support.</p>
                </div>
              </div>
              <a href="#home" className="btn">
                Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
