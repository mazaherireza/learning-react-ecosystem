import { useRouteLoaderData, Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

const EventItem = ({ event }) => {
  const token = useRouteLoaderData("token");

  const { image, title, date, description, id } = event;

  const submit = useSubmit();

  const startDeleteHandler = () => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      submit(null, { method: "DELETE" });
    }
  };

  return (
    <article className={classes.event}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <time>{date}</time>
      <p>{description}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
};

export default EventItem;
