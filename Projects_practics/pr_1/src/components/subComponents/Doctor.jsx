import React from "react";
import ServiceBg from "../../assets/imgs/service-bg.jpg";
import Doctor1 from "../../assets/imgs/doctor-1.jpg";
import Doctor2 from "../../assets/imgs/doctor-2.jpg";
import Doctor3 from "../../assets/imgs/doctor-3.jpg";

const Doctor = () => {
  return (
    <>
      <section
        className="section doctor"
        style={{ backgroundImage: `url(${ServiceBg})` }}
        aria-labelledby="doctor-label"
      >
        <div className="container">
          <h2 className="h2 section-title" id="doctor-label">
            Meet Our Best Doctors
          </h2>

          <p className="section-text text">
            Dynamically formulate fully tested catalysts for change via focused
            methods of empowerment Assertively extend alternative synergy and
            extensive web services.
          </p>

          <ul className="grid-list">
            <li>
              <div className="doctor-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "350px", height: "360px" }}
                >
                  <img
                    src={Doctor1}
                    width="350"
                    height="360"
                    loading="lazy"
                    alt="Dorothy M. Nickell profile"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">Dorothy M. Nickell</h3>

                  <p className="card-subtitle">Throat Specialist</p>

                  <p className="card-text text">
                    Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe
                    Cuvaes Mana The Conen Testin Motin Was Procedur
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <div className="icon-box">
                        <ion-icon name="call" aria-hidden="true"></ion-icon>
                      </div>

                      <span className="span">+502 1234 567 890</span>
                    </li>

                    <li className="card-item">
                      <div className="icon-box">
                        <ion-icon name="mail" aria-hidden="true"></ion-icon>
                      </div>

                      <span className="span">d.m.nickell@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="doctor-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "350px", height: "360px" }}
                >
                  <img
                    src={Doctor2}
                    width="350"
                    height="360"
                    loading="lazy"
                    alt="Billie R. Courtney profile"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">Billie R. Courtney</h3>

                  <p className="card-subtitle">Cardiologist</p>

                  <p className="card-text text">
                    Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe
                    Cuvaes Mana The Conen Testin Motin Was Procedur
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <div className="icon-box">
                        <ion-icon name="call" aria-hidden="true"></ion-icon>
                      </div>

                      <span className="span">+502 1234 567 890</span>
                    </li>

                    <li className="card-item">
                      <div className="icon-box">
                        <ion-icon name="mail" aria-hidden="true"></ion-icon>
                      </div>

                      <span className="span">b.r.courtney@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="doctor-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "350px", height: "360px" }}
                >
                  <img
                    src={Doctor3}
                    width="350"
                    height="360"
                    loading="lazy"
                    alt="Courtney A. Smith profile"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4 card-title">Courtney A. Smith</h3>

                  <p className="card-subtitle">Rehabilitation Therapy</p>

                  <p className="card-text text">
                    Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe
                    Cuvaes Mana The Conen Testin Motin Was Procedur
                  </p>

                  <ul className="card-list">
                    <li className="card-item">
                      <div className="icon-box">
                        <ion-icon name="call" aria-hidden="true"></ion-icon>
                      </div>

                      <span className="span">+502 1234 567 890</span>
                    </li>

                    <li className="card-item">
                      <div className="icon-box">
                        <ion-icon name="mail" aria-hidden="true"></ion-icon>
                      </div>

                      <span className="span">c.a.smith@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Doctor;
