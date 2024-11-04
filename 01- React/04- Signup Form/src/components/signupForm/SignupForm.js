import { useState } from "react";
import "./SignupForm.css";

/* 
  We can use the useState Hook to keep track of each inputs value and provide a "single source of truth"
  for the entire application.
*/

export default function SignupForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="wrapper">
      <h4 className="title">McDonald's Email Signup</h4>
      <h3 className="signup">Sign Up*</h3>
      <p className="information">
        Be in the know about deals, MyMcDonald's Rewards, news and more by
        signing up for our emails
      </p>
      <p className="warning">* Indicates a required field</p>
      <form
        action=""
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          * Email
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            autoFocus
            required
          />
        </label>

        <label>
          * Zip Code
          <input
            type="text"
            id="zip"
            name="zip"
            value={inputs.zip || ""}
            onChange={handleChange}
            required
          />
        </label>

        <p className="information">
          *By selecting "Sign Up", you agree to the
          <a href="#">McDonald's Privacy Policy</a> and
          <a href="#">Terms & Conditions</a>.
          <a href="#">Unsubscribe from emails</a> any time. Please note when
          unsubscribing: it may take up 10 business days for your request to
          take effect.
        </p>

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
