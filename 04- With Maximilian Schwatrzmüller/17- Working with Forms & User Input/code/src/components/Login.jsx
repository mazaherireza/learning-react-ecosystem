import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.jsx";

const LIMIT = 6;

const Login = () => {
  const {
    input: emailInput,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    input: passwordInput,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, LIMIT));

  const handleSubmit = (event) => {
    if (emailHasError && passwordHasError) return;
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <Input
            id="email"
            label="Email"
            type="email"
            name="email"
            value={emailInput}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailHasError && "Please enter a valid email."}
          ></Input>
        </div>

        <div className="control no-margin">
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            value={passwordInput}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            error={passwordHasError && "Please enter a valid password."}
          ></Input>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
};

export default Login;
