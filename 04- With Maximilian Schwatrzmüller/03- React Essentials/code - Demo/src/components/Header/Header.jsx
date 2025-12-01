import reactImg from "@/assets/react-core-concepts.png";
import "./Header.css";

const descriptions = ["Fundemental", "Crucial", "Core"];

const MAX = descriptions.length;

const generateRandomInt = () => Math.floor(Math.random() * MAX);

const Header = () => {
  const description = descriptions[generateRandomInt()];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
