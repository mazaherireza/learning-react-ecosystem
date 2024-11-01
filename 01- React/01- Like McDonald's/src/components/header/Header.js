import logo from "./Logo_108x108.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Logo" />
        <div className="links">
          <div className="secondary-links">
            <i className="hamburger-icon fa fa-bars fa-2x"></i>
            <ul>
              <li className="dropdown">
                <a>Language</a>
                <i className="fa fa-chevron-down"></i>
              </li>
              <li>
                <a>Sign Up For Email</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
            </ul>
            <button id="button-ordernow">Order Now</button>
          </div>

          <div className="primary-links">
            <nav>
              <ul>
                <li className="dropdown">
                  <a>Our Menu</a>
                  <i className="fa fa-chevron-down"></i>
                </li>
                <li>
                  <a>Download App</a>
                </li>
                <li>
                  <a>MyMcDonald's Rewards</a>
                </li>
                <li>
                  <a>About Our Food</a>
                </li>
                <li>
                  <a>
                    McDelivery<sup>&reg;</sup>
                  </a>
                </li>
                <li>
                  <a>Gift Cards</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
