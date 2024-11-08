import "./Header.css";
import logo from "./Logo.svg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </nav>
      </div>
    </header>
  );
}
