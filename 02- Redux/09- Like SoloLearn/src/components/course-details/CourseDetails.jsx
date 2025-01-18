import { useParams } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = ({ img, title, description }) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="course-details-wrapper">
      <div className="course-img-wrapper">
        <img src={img} alt={title} />
      </div>

      <div className="course-information">
        <h4 className="course-title">{title}</h4>
        <p className="course-description">{description}</p>
      </div>

      <button>Learn</button>
    </div>
  );
};

export default CourseDetails;
