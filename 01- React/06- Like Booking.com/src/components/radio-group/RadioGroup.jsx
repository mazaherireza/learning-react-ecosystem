import "./RadioGroup.css";

export default function RadioGroup(props) {
  const { types } = props;
  return (
    <div className="radio-group-container">
      {types.map((type) => {
        const { _id, title } = type;
        return (
          <label key={_id} className="rg-label">
            <input type="radio" name="type" />
            {title}
            <span className="checkmark"></span>
          </label>
        );
      })}
    </div>
  );
}
