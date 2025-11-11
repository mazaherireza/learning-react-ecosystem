const Input = ({ id, label, ...other }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...other} />
    </>
  );
};

export default Input;
