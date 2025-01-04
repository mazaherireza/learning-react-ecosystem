import { useLoaderData } from "react-router-dom";
import CourseCard from "./courseCard/course-card";

const CourseList = () => {
  const courses = useLoaderData();
  return (
    <>
      {courses &&
        courses.map((course) => (
          <CourseCard key={course.id} {...course}></CourseCard>
        ))}
    </>
  );
};

export default CourseList;
