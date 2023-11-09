import React from "react";
import ServiceBg from "../../assets/imgs/service-bg.jpg";
import Service1 from "../../assets/imgs/service-1-1.jpg";
import Service2 from "../../assets/imgs/service-1-2.jpg";
import Service3 from "../../assets/imgs/service-1-3.jpg";
import Service4 from "../../assets/imgs/service-1-4.jpg";
import Service5 from "../../assets/imgs/service-1-5.jpg";
import Service6 from "../../assets/imgs/service-1-6.jpg";

const Service = () => {
  return (
    <>
      <section
        className="section service has-bg-image"
        style={{ backgroundImage: `url(${ServiceBg})` }}
        aria-labelledby="service-label-1"
      >
        <div className="container">
          <h2 className="h2 section-title" id="service-label-1">
            Corona Virus Symptoms
          </h2>

          <p className="section-text text">
            Dynamically formulate fully tested catalysts for change via focused
            methods of empowerment Assertively extend alternative synergy and
            extensive web services.
          </p>

          <ul className="service-list">
            <li>
              <div className="service-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "110px", height: "110px" }}
                >
                  <img
                    src={Service1}
                    width="110"
                    height="110"
                    loading="lazy"
                    alt="service image"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">Coughing And Sneezing</h3>

                  <p className="card-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "110px", height: "110px" }}
                >
                  <img
                    src={Service2}
                    width="110"
                    height="110"
                    loading="lazy"
                    alt="service image"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">Hot Fever</h3>

                  <p className="card-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "110px", height: "110px" }}
                >
                  <img
                    src={Service3}
                    width="110"
                    height="110"
                    loading="lazy"
                    alt="service image"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">Strong Headacke</h3>

                  <p className="card-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "110px", height: "110px" }}
                >
                  <img
                    src={Service4}
                    width="110"
                    height="110"
                    loading="lazy"
                    alt="service image"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">Shortness Of Breath</h3>

                  <p className="card-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "110px", height: "110px" }}
                >
                  <img
                    src={Service5}
                    width="110"
                    height="110"
                    loading="lazy"
                    alt="service image"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">Confusion</h3>

                  <p className="card-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "110px", height: "110px" }}
                >
                  <img
                    src={Service6}
                    width="110"
                    height="110"
                    loading="lazy"
                    alt="service image"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">Sore Throat</h3>

                  <p className="card-text text">
                    Our comprehensive Online Marketing strategy will boost your
                    website trafic hence monthly sales.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Service;
