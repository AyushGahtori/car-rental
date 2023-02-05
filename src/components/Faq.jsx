import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Use securing confined his shutters. Delightful as he it
                acceptance an solicitude discretion reasonably. Carriage we
                husbands advanced an perceive greatest.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. What is special about comparing rental car deals?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. How do I find the car rental deals?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. How do I find such low rental car prices?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
