import { Link } from "react-router-dom";
import Logo from "../assets/imgs/logo.svg";

const Header = () => {
  return (
    <div>
      <header class="header" data-header>
        <div class="container">
          <Link to={"/"} class="logo">
            <img src={Logo} width="199" height="50" alt="Covid-19 home" />
          </Link>

          <nav class="navbar" data-navbar>
            <ul class="navbar-list">
              <li class="navbar-item">
                <Link to={"/"} class="navbar-link" data-nav-link>
                  Home
                </Link>
              </li>

              <li class="navbar-item">
                <Link to={"/about"} class="navbar-link" data-nav-link>
                  About
                </Link>
              </li>

              <li class="navbar-item">
                <Link to={"/"} class="navbar-link" data-nav-link>
                  Prevention
                </Link>
              </li>

              <li class="navbar-item">
                <Link to={"/blog"} class="navbar-link" data-nav-link>
                  Blog
                </Link>
              </li>

              <li class="navbar-item">
                <Link to={"/"} class="navbar-link" data-nav-link>
                  Shop
                </Link>
              </li>

              <li class="navbar-item">
                <Link to class="navbar-link" data-nav-link>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <button
            class="nav-toggle-btn"
            aria-label="toggle menu"
            data-nav-toggler
          >
            <ion-icon
              name="menu-outline"
              aria-hidden="true"
              class="menu"
            ></ion-icon>
            <ion-icon
              name="close-outline"
              aria-hidden="true"
              class="close"
            ></ion-icon>
          </button>

          <Link href="#" class="btn btn-primary">
            Are You Sick
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
