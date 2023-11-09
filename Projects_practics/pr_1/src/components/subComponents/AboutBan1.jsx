import React from "react";
import AboutBanner1 from "../../assets/imgs/about-banner-1.png";
import About1 from "../../assets/imgs/about-1-1.jpg";
import About2 from "../../assets/imgs/about-1-2.jpg";
import About3 from "../../assets/imgs/about-1-3.jpg";

const AboutBan1 = () => {
  return (
    <>
      <section
        className="section about"
        id="about"
        aria-labelledby="about-label-1"
      >
        <div className="container">
          <figure className="about-banner">
            <img
              src={AboutBanner1}
              width="540"
              height="540"
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </figure>

          <div className="about-content">
            <p className="about-subtitle" id="about-label-1">
              How Virus Spread
            </p>

            <h2 className="h2 section-title">How Contagion Coronavirus</h2>

            <p className="section-text text">
              Don’t get shirty with mein owtto doing with me arse down the
              problems have it car boot happy days no biggie bevvy only awesome
              quid I,m goods info my theme flat the lttle rotter cheeky boot
              happy days
            </p>

            <ul className="about-list">
              <li className="about-item">
                <figure
                  className="item-img img-holder"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={About1}
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Human Contact"
                  />
                </figure>

                <div className="item-content">
                  <h3 className="h4 item-title">Human Contact</h3>

                  <p className="item-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </li>

              <li className="about-item">
                <figure
                  className="item-img img-holder"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={About2}
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Air Transmission"
                  />
                </figure>

                <div className="item-content">
                  <h3 className="h4 item-title">Air Transmission</h3>

                  <p className="item-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </li>

              <li className="about-item">
                <figure
                  className="item-img img-holder"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={About3}
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Contaminated Objects"
                  />
                </figure>

                <div className="item-content">
                  <h3 className="h4 item-title">Contaminated Objects</h3>

                  <p className="item-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBan1;
