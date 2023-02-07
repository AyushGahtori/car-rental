import CarImg from "../images/cars-big/audia1.jpg";

function BookCar() {
  return (
    <>
      <section className="book-section">
        {/* overlay */}
        <div className="modal-overlay"></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h3>Book a car</h3>
              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Yout Car
                    Type
                  </label>
                  <select>
                    <option>Select your car type</option>
                    <option>Audi A1 S-Line</option>
                    <option>VW Golf 6</option>
                    <option>Toyota Camry</option>
                    <option>BMW 320 ModernLine</option>
                    <option>Mercedes-Benz GLK</option>
                    <option>VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up
                  </label>
                  <select>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of
                  </label>
                  <select>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label>
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up
                  </label>
                  <input type="date"></input>
                </div>

                <div className="box-form__car-time">
                  <label>
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of
                  </label>
                  <input type="date"></input>
                </div>

                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal */}
      <div className="booking-modal">
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Time</h6>
                  <p>25/02/2023 - 12:00 AM</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Time</h6>
                  <p>1/03/2023 - 12:00 AM</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>Belgrade - 23 Mihaila Pupina</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>Belgrade - 23 Mihaila Pupina</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>Car - Audi A1 S-Line</h5>
            <img src={CarImg} alt="car_img" />
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input type="text" placeholder="Enter your first name"></input>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input type="text" placeholder="Enter your last name"></input>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input type="tel" placeholder="Enter your phone number"></input>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input type="number" placeholder="18"></input>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                ></input>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your street address"
                ></input>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input type="text" placeholder="Enter your city"></input>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input type="text" placeholder="Enter your zip code"></input>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
