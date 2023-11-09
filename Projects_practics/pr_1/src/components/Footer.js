import React from "react";
import FooterBg from "../assets/imgs/footer-bg.jpg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer
        className="footer has-bg-image"
        style={{ backgroundImage: `url(${FooterBg})` }}
      >
        <div className="container">
          <div className="footer-top section">
            <div className="footer-brand">
              <h3 className="h4 footer-list-title">About Covid-19</h3>

              <p className="footer-text text">
                We believe in Simple Creative and Flexible Design Standards.
              </p>

              <ul className="contact-list">
                <li className="contact-item">
                  <p className="contact-title">Headquarters:</p>

                  <address className="address text">
                    795 Folsom Ave, Suite 600 San Francisco, CA 94107
                  </address>
                </li>

                <li className="contact-item">
                  <p className="contact-title">Phone:</p>

                  <Link to={"tel:+524623435643"} className="text">
                    (+52) 4623 435643
                  </Link>
                </li>

                <li className="contact-item">
                  <p className="contact-title">Email:</p>

                  <Link to="mailto:info@covid-19.com" className="text">
                    info@covid-19.com
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <h3 className="h4 footer-list-title">Navigate</h3>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <a to={"/"} className="footer-link">
                  Advertisers
                </a>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Developers
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Resources
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Company
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Connect
                </Link>
              </li>
            </ul>

            <ul className="footer-list social-list">
              <li>
                <h3 className="h4 footer-list-title">Social Contact</h3>
              </li>

              <li className="footer-list-item">
                <ion-icon name="logo-facebook" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Facebook
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="logo-twitter" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Twitter
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Instagram
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="logo-youtube" aria-hidden="true"></ion-icon>

                <Link href="#" className="footer-link">
                  YouTube
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="logo-xing" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Xing
                </Link>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <h3 className="h4 footer-list-title">Privacy And Tos</h3>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Advertiser Agreement
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <Link href="#" className="footer-link">
                  Acceptable Use Policy
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Privacy Policy
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Technology Privacy
                </Link>
              </li>

              <li className="footer-list-item">
                <ion-icon name="caret-forward" aria-hidden="true"></ion-icon>

                <Link to={"/"} className="footer-link">
                  Developer Agreement
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2023 All Rights Reserved. Developed by AjayDumaraliya
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
