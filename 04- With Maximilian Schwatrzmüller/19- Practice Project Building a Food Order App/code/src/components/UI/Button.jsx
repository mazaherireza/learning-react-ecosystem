const Button = ({ children, textOnly, className, ...other }) => {
  const CSSClasses = textOnly
    ? `${className} text-button`
    : `${className} button`;
  return (
    <button className={CSSClasses} {...other}>
      {children}
    </button>
  );
};

export default Button;
