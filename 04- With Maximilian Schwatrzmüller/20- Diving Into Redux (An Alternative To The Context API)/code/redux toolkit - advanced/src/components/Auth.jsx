import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import Input from "./UI/Input";
import Button from "./UI/Button";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <Input id="email" label="email" type="email" />
          </div>
          <div className={classes.control}>
            <Input id="password" label="password" type="password" />
          </div>
          <Button>Login</Button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
