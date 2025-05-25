import Logo from "@/assets/investment-calculator-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <img src={Logo} alt="Logo Showing a Money Bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
