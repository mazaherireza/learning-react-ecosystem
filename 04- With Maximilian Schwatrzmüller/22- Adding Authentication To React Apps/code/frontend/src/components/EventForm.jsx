import {
  useNavigate,
  useNavigation,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";
import { BASE_URL } from "../constants";
import { getToken } from "../utils/auth";
import classes from "./EventForm.module.css";

const EventForm = ({ method, event = {} }) => {
  const navigate = useNavigate();

  const navigation = useNavigation();

  const data = useActionData();

  const isSubmitting = navigation.state === "submitting";

  const cancelHandler = () => {
    navigate("..");
  };

  const { title, image, date, description } = event;
  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={title ?? ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={image ?? ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={date ?? ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={description ?? ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting ... " : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = BASE_URL;
  const method = request.method;

  if (method === "PATCH") {
    const id = params.eventId;
    url += `events/${id}`;
  }

  if (method === "POST") {
    url += "events";
  }

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }
  
  if (!response.ok)
    throw new Response(
      JSON.stringify({ message: "Could not save event." }, { status: 500 })
    );

  /// Or: throw json({ message: "Could not save event." }, { status: 500 });
  return redirect("/events");
};
