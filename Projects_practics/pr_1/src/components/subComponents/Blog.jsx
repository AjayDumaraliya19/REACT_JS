import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/imgs/blog-1.jpg";
import Blog2 from "../../assets/imgs/blog-2.jpg";
import Blog3 from "../../assets/imgs/blog-3.jpg";

const Blog = () => {
  return (
    <>
      <section className="section blog" id="blog" aria-labelledby="blog-lable">
        <div className="container">
          <h2 className="h2 section-title" id="blog-label">
            Our Most Popular Blog
          </h2>

          <p className="section-text text">
            Dynamically formulate fully tested catalysts for change via focused
            methods of empowerment Assertively extend alternative synergy and
            extensive web services.
          </p>

          <ul className="grid-list">
            <li>
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "370px", height: "280" }}
                >
                  <img
                    src={Blog1}
                    width="370"
                    height="280"
                    loading="lazy"
                    alt="Conulting Reporting Qouncil Arei Not Could More..."
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      Conulting Reporting Qouncil Arei Not Could More...
                    </a>
                  </h3>

                  <div className="card-meta">
                    <div className="wrapper">
                      <ion-icon
                        name="calendar-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <time className="meta-text" datetime="2022-07-12">
                        July 12, 2022
                      </time>
                    </div>

                    <div className="wrapper">
                      <ion-icon
                        name="person-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p className="meta-text">John Doe</p>
                    </div>
                  </div>

                  <p className="card-text text">
                    Pluoresntly customize pranci an plcentered customer service
                    anding strategic amerials Interacvely cordinate performe
                  </p>
                </div>

                <div className="card-footer">
                  <Link to={"/"} className="btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "370px", height: "280" }}
                >
                  <img
                    src={Blog2}
                    width="370"
                    height="280"
                    loading="lazy"
                    alt="Financial Reporting Qouncil What Could More..."
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      Financial Reporting Qouncil What Could More...
                    </a>
                  </h3>

                  <div className="card-meta">
                    <div className="wrapper">
                      <ion-icon
                        name="calendar-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <time className="meta-text" datetime="2022-07-12">
                        July 12, 2022
                      </time>
                    </div>

                    <div className="wrapper">
                      <ion-icon
                        name="person-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p className="meta-text">John Doe</p>
                    </div>
                  </div>

                  <p className="card-text text">
                    Pluoresntly customize pranci an plcentered customer service
                    anding strategic amerials Interacvely cordinate performe
                  </p>
                </div>

                <div className="card-footer">
                  <Link to={"/"} className="btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "370px", height: "280" }}
                >
                  <img
                    src={Blog3}
                    width="370"
                    height="280"
                    loading="lazy"
                    alt="Consulting Reporting Qounc Arei Could More..."
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h4">
                    <a href="#" className="card-title">
                      Consulting Reporting Qounc Arei Could More...
                    </a>
                  </h3>

                  <div className="card-meta">
                    <div className="wrapper">
                      <ion-icon
                        name="calendar-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <time className="meta-text" datetime="2022-07-12">
                        July 12, 2022
                      </time>
                    </div>

                    <div className="wrapper">
                      <ion-icon
                        name="person-outline"
                        aria-hidden="true"
                      ></ion-icon>

                      <p className="meta-text">John Doe</p>
                    </div>
                  </div>

                  <p className="card-text text">
                    Pluoresntly customize pranci an plcentered customer service
                    anding strategic amerials Interacvely cordinate performe
                  </p>
                </div>

                <div className="card-footer">
                  <Link to={"/"} className="btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Blog;
