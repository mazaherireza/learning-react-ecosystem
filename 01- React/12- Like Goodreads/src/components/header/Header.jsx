import "./Header.css";
import logo from "./Logo.svg";
import { NavLink } from "react-router-dom";
import { isLogin } from "../../constants";

export default function Header() {
  return (
    <header>
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <nav>
          {!isLogin && <NavLink to="/login">Login</NavLink>}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/recommendations" className="parent-item">
            <span className="item">
              <span>Recommendations</span>
              <i className="fa fa-caret-down"></i>
            </span>
            <span className="content">
              <NavLink to="/recommendations/groups">Groups</NavLink>
              <NavLink to="/recommendations/discussions">Discussions</NavLink>
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
