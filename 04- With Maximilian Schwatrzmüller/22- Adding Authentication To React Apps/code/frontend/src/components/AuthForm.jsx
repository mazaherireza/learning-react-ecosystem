import {
  useSearchParams,
  Form,
  Link,
  useActionData,
  useNavigation,
} from "react-router-dom";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  
  const isLogin = searchParams.get("mode") === "login";

  const data = useActionData();

  const { state } = useNavigation();
  
  const isSbumitting = state === "submitting";

  return (
    <>
      <Form method="POST" className={classes.form}>
        <h2>{isLogin ? "Log in" : "Create a new user"}</h2>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "link"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSbumitting}>
            {isSbumitting ? "Submitting" : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default AuthForm;
