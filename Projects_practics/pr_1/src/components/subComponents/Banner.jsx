import React from "react";
import { Link } from "react-router-dom";
import HeroBg from "../../assets/imgs/hero-bg.jpg";
import HeroBanner from "../../assets/imgs/hero-banner.png"

const Banner = () => {
  return (
    <>
      <section
        className="section hero has-bg-image"
        id="home"
        style={{ backgroundImage: `url(${HeroBg})` }}
        aria-label="home"
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">COVID-19 Tracker</h1>

            <p className="hero-text">Tatal Confirmed Corona Cases</p>

            <data className="counter" value="960708">
              960708
            </data>

            <ul className="hero-list">
              <li className="hero-list-item yellow">
                Active cases <span className="span">799571</span>
              </li>

              <li className="hero-list-item green">
                Recovered cases <span className="span">302826</span>
              </li>

              <li className="hero-list-item red">
                Deaths <span className="span">52558</span>
              </li>
            </ul>

            <Link to={"/"} className="btn btn-primary">
              Meet The Doctor
            </Link>
          </div>

          <figure className="hero-banner">
            <img
              src={HeroBanner}
              width="570"
              height="562"
              alt="corona virus"
              className="w-100"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Banner;
