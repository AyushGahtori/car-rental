function BookCar() {
  return (
    <>
      <section className="book-section">
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
                    <option>Audi</option>
                    <option>Mercedes</option>
                    <option>BMW</option>
                    <option>Opel</option>
                    <option>Reno</option>
                    <option>Nissan</option>
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
    </>
  );
}

export default BookCar;
