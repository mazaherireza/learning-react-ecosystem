import "./UserInputs.css";

const UserInputs = ({ userInputs, onChange }) => {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    onChange(name, value);
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment">Initial Investment</label>
          <input
            id="investment"
            type="number"
            name="investment"
            value={userInputs.investment}
            onChange={handleChange}
            required
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            id="annualInvestment"
            type="number"
            name="annualInvestment"
            value={userInputs.annualInvestment}
            onChange={handleChange}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            name="expectedReturn"
            value={userInputs.expectedReturn}
            onChange={handleChange}
            required
          />
        </p>

        <p>
          <label htmlFor="duratin">Duration</label>
          <input
            id="duration"
            type="number"
            name="duration"
            value={userInputs.duration}
            onChange={handleChange}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInputs;
