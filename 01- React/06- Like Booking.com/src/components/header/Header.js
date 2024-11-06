import "./Header.css";
import RadioGroup from "../radio-group/RadioGroup";
import SearchBox from "../search-box/SearchBox";
import types from "./types";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#">Booking.com</a>
          <i className="fa fa-bars fa-2x"></i>
          <div className="btns">
            <button className="btn">Register</button>
            <button className="btn">Sign in</button>
          </div>
        </nav>
        <div className="header-content">
          <h4>Compare and book flights with ease</h4>
          <p>Discover your next dream destination</p>
          <RadioGroup types={types}></RadioGroup>
          <SearchBox className="search-box-component"></SearchBox>
        </div>
      </div>
    </header>
  );
}
