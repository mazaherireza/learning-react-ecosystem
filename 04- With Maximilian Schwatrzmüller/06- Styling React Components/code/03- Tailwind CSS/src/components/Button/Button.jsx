const Button = ({ children, ...other }) => {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded cursor-pointer text-stone-900 bg-amber-400 hover:bg-amber-500"
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
