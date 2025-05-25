import { calculateInvestmentResults, formatter } from "@/util/investment";
import "./Results.css";

const Results = ({ input }) => {
  const result = calculateInvestmentResults(input);
  const { valueEndOfYear: vEY, interest: i, annualInvestment: aI } = result[0];
  const initialInvestment = vEY - i - aI;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value </th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {result.map((row) => {
          const { year, interest, annualInvestment, valueEndOfYear } = row;
          const totalInterest =
            valueEndOfYear - annualInvestment * year - initialInvestment;

          const totalAmountInvested = valueEndOfYear - totalInterest;
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
