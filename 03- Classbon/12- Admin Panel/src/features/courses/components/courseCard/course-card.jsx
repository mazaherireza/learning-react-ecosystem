import "./course-card.css";
import { convertEnNumToFa } from "@helpers/convertEnNumToFa";

const CourseCard = ({ coverImageUrl, title, duration }) => {
  return (
    <div className="course-card-wrapper">
      <div className="img-wrapper">
        <img src={coverImageUrl} alt={title} />
      </div>
      <div className="text-wrapper">
        <div>
          <h5>{title}</h5>
          <h6>{convertEnNumToFa(duration)} ساعت</h6>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
