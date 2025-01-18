import { courses } from "@/constants/courses";
import CourseCard from "@/components/course-card/CourseCard"
import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses-wrapper">
      <div className="container">
        <div className="inner-wrapper">
          <h2 className="page-title">Explore our courses</h2>
          {courses.map((course) => (
            <CourseCard key={course._id} {...course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
