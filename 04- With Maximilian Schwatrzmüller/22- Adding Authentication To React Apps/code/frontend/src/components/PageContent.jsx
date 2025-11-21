import classes from "./PageContent.module.css";

const PageContent = ({ title, children }) => {
  return (
    <div className={classes.content}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default PageContent;
