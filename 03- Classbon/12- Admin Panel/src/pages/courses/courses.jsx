import { useLoaderData, defer, Await } from "react-router-dom";
import { httpInterceptedService } from "@core/http-service";
import CourseList from "@features/courses/components/course-list";
import { Suspense } from "react";
import "./courses.css";

const Courses = () => {
  const data = useLoaderData();
  return (
    <div className="courses-wrapper">
      <button>افزودن دوره‌ی جدید</button>
      <div className="grid-container">
        <Suspense fallback={<p>در حال دریافت اطلاعات</p>}>
          <Await resolve={data.courses}>
            {(list) => <CourseList courses={list}></CourseList>}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

const loader = async () => {
  const { data } = await httpInterceptedService.get("/Course/list");
  return data;
};

export const coursesLoader = async () => {
  return defer({
    courses: loader(),
  });
};

export default Courses;

// Error:
// react-router-dom.js does not provide an export named 'defer'
