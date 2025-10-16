const Input = ({ id, label, ...other }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...other} />
    </p>
  );
};

export default Input;
