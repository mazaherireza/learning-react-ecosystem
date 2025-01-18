import { courses } from "@/constants/courses";
import CourseCard from "@/components/course-card/CourseCard";
import { useTranslation } from "react-i18next";
import "./Courses.css";

const Courses = () => {
  const { t } = useTranslation();
  return (
    <div className="courses-wrapper">
      <div className="container">
        <div className="inner-wrapper">
          <h2 className="page-title">{t("courses.explore our courses")}</h2>
          {courses.map((course) => (
            <CourseCard key={course._id} {...course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
