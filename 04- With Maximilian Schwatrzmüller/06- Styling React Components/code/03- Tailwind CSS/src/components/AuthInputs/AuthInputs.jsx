import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import Button from "../Button/Button";

const AuthInputs = () => {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    setSubmitted(true);
  };

  const emailNotValid = submitted && !inputs.email?.includes("@");
  const passwordNotValid = submitted && inputs.password?.trim().length < 6;

  return (
    <div className="w-full max-w-sm p-8 mx-auto my-0 rounded shadow-md bg-gradient-to-b from-stone-300 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <p>
          <CustomInput
            label="email"
            value={inputs.email || ""}
            type="email"
            name="email"
            invalid={emailNotValid}
            onChange={handleChange}
            autoFocus
          ></CustomInput>
        </p>
        <p>
          <CustomInput
            label="password"
            value={inputs.password || ""}
            type="password"
            name="password"
            invalid={passwordNotValid}
            onChange={handleChange}
          ></CustomInput>
        </p>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default AuthInputs;
