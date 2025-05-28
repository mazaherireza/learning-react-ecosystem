import { useState } from "react";
import CustomInput from "./CustomInput.jsx";
import { styled } from "styled-components";
import { Container, Actions, Button, TextButton } from "./StyledComponents.jsx";

const AuthWrapper = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #474232 0%, #28271c 100%);
  color: white;
`;

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
    <AuthWrapper>
      <Container>
        <p>
          <CustomInput
            label="Email"
            name="email"
            value={inputs.email}
            $invalid={emailNotValid}
            type="email"
            onChange={(event) => handleChange(event)}
          ></CustomInput>
        </p>
        <p>
          <CustomInput
            label="Password"
            name="password"
            value={inputs.password}
            $invalid={passwordNotValid}
            type="password"
            onChange={(event) => handleChange(event)}
          ></CustomInput>
        </p>
      </Container>

      <Actions>
        <TextButton type="button">Create a new account</TextButton>
        <Button onClick={() => setSubmitted(true)}>Sign In</Button>
      </Actions>
    </AuthWrapper>
  );
};

export default AuthInputs;
