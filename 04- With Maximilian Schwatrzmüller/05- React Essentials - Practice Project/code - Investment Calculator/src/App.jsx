import { useState } from "react";
import Header from "./components/Header/Header";
import UserInputs from "./components/UserInputs/UserInputs";
import Results from "./components/Results/Results";

const App = () => {
  const [userInputs, setUserInputs] = useState({
    investment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (name, value) => {
    setUserInputs((prev) => ({ ...prev, [name]: +value }));
  };

  const isInputValid = userInputs.duration >= 1;
  return (
    <>
      <Header></Header>
      <UserInputs userInputs={userInputs} onChange={handleChange}></UserInputs>
      {!isInputValid && (
        <p className="center">Please Enter a Duration Greater Than One.</p>
      )}
      {isInputValid && <Results input={userInputs}></Results>}
    </>
  );
};

export default App;
