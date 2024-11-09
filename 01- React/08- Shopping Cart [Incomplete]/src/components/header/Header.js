import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <span id="logo">Nivea</span>
          <nav>
            <a href="#">Products</a>
            <a href="#">Love Your Skin</a>
            <a href="#">About Us</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
