import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ _id, img, title, description }) => {
  return (
    <Link className="course-card-wrapper" to={`/courses/${_id}`}>
      <div className="course-img-wrapper">
        <img src={img} alt={title} />
      </div>

      <div className="course-information">
        <h4 className="course-title">{title}</h4>
        <p className="course-description">{description}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
