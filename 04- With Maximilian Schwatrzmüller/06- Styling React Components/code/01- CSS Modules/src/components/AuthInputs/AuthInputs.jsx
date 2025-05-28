import { useState } from "react";
import classes from "./AuthInputs.module.css";

const AuthInputs = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const emailNotValid = submitted && !inputs.email.includes("@");
  const passwordNotValid = submitted && inputs.password.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleChange(event)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            name="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) => handleChange(event)}
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={() => setSubmitted(true)}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default AuthInputs;
