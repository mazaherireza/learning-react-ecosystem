import "./NotFound.css";
import img from "./NotFound.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <div className="not-found-wrapper">
        <div className="content">
          <h4>Sorry, you've reached the end of the sidewalk.</h4>
          <q>
            Yes we'll walk with a walk that is measured and slow, And we'll go
            where the chalk-white arrows go, For the children, they mark, and
            the children, they know The place where the sidewalk ends.
          </q>
          <p>Shel Silverstein - Where the Sidewalk Ends</p>
          <button onClick={clickHandler}>Back to Goodreads Homepage</button>
        </div>

        <div className="img-wrapper">
          <img src={img} />
        </div>
      </div>
    </div>
  );
}
