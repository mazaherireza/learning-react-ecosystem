import CourseCard from "./courseCard/course-card";

const CourseList = ({ list }) => {
  return (
    <>
      {list &&
        list.map((course) => (
          <CourseCard key={course.id} {...course}></CourseCard>
        ))}
    </>
  );
};

export default CourseList;
