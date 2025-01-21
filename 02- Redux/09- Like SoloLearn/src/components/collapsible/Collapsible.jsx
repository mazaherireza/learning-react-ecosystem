import { useState, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Collapsible.css";

const Collapsible = ({ img, title, description }) => {
  const [visibility, setVisibility] = useState(false);
  const ref = useRef();

  const handleClick = () => {
    setVisibility((prev) => !prev);
    if (ref.current) {
      ref.current.classList.toggle("expanded");
    }
  };
  return (
    <div className="collapsible-wrapper">
      <div className="collapsible-img-wrapper">
        <img src={img} alt={title}></img>
      </div>

      <div className="collapsible-header">
        <button onClick={handleClick}>
          <h2 className="title">{title}</h2>

          {visibility ? (
            <FiChevronUp
              style={{ fontSize: "x-large", color: "var(--secondary)" }}
            ></FiChevronUp>
          ) : (
            <FiChevronDown
              style={{ fontSize: "x-large", color: "var(--secondary)" }}
            ></FiChevronDown>
          )}
        </button>

        <div className="collapsible-description-wrapper">
          <div className="collapsible-description" ref={ref}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
