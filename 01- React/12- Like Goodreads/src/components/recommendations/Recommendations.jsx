import "./recommendations.css";
import { Outlet } from "react-router-dom";

export default function Recommendations() {
  return (
    <div className="container">
      <div className="recommendations-wrapper">
        <h4>Recommendations</h4>
        <p>Here are some books we think you'll love.</p>
        <p className="information">Base on your to read shelf</p>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
