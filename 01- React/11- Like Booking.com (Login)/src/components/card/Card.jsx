import "./Card.css";

const Card = (props) => {
  const { tag } = props;
  return <div className="card-wrapper">{tag}</div>;
};

export default Card;
