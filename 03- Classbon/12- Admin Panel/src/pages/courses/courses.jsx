import { httpInterceptedService } from "@core/http-service";
import CourseList from "@features/courses/components/course-list";
import "./courses.css";

const Courses = () => {
  return (
    <div className="courses-wrapper">
      <button>افزودن دوره‌ی جدید</button>
      <div className="grid-container">
        <CourseList></CourseList>
      </div>
    </div>
  );
};

export const coursesLoader = async () => {
  const { data } = await httpInterceptedService.get("/Course/list");
  return data;
};

export default Courses;
