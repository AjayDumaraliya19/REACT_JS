import React from "react";
import AboutB1 from "../../assets/imgs/about-banner-2.png";
import About1 from "../../assets/imgs/about-2-1.jpg";
import About2 from "../../assets/imgs/about-2-2.jpg";
import About3 from "../../assets/imgs/about-2-3.jpg";

const AboutBan2 = () => {
  return (
    <>
      <section
        className="section about"
        id="about"
        aria-labelledby="about-label-2"
      >
        <div className="container">
          <figure className="about-banner order-1">
            <img
              src={AboutB1}
              width="540"
              height="540"
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </figure>

          <div className="about-content">
            <p className="about-subtitle" id="about-label-2">
              About (2020-nCoV)
            </p>

            <h2 className="h2 section-title">Prevention Coronavirus</h2>

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
                  style={{ width: "80px", height: "80" }}
                >
                  <img
                    src={About1}
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Wash Your Hands For 20sec"
                  />
                </figure>

                <div className="item-content">
                  <h3 className="h4 item-title">Wash Your Hands For 20sec</h3>

                  <p className="item-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </li>

              <li className="about-item">
                <figure
                  className="item-img img-holder"
                  style={{ width: "80", height: "80" }}
                >
                  <img
                    src={About2}
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Cover Nose and Mouth When Sneezing"
                  />
                </figure>

                <div className="item-content">
                  <h3 className="h4 item-title">
                    Cover Nose and Mouth When Sneezing
                  </h3>

                  <p className="item-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </li>

              <li className="about-item">
                <figure
                  className="item-img img-holder"
                  style={{ width: "80", height: "80px" }}
                >
                  <img
                    src={About3}
                    width="80"
                    height="80"
                    loading="lazy"
                    alt="Wear A Mask If Available"
                  />
                </figure>

                <div className="item-content">
                  <h3 className="h4 item-title">Wear A Mask If Available</h3>

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

export default AboutBan2;
