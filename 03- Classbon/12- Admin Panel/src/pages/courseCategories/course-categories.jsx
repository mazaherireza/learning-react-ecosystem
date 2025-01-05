import { httpInterceptedService } from "@core/http-service";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import CategoryList from "@features/categories/components/categoryList/category-list";
import "./course-categories.css";

const CourseCategories = () => {
  const { courseCategories } = useLoaderData();
  return (
    <div className="course-categories-wrapper">
      <button>افزودن دسته‌بندی جدید</button>
      <Suspense fallback={<p>در حال دریافت اطلاعات</p>}>
        <Await
          resolve={courseCategories}
          children={(resolvedCourseCategories) => (
            <CategoryList {...resolvedCourseCategories.data}></CategoryList>
          )}
        ></Await>
      </Suspense>
    </div>
  );
};

export const courseCategoriesLoader = async () => {
  const courseCategories = httpInterceptedService.get("/CourseCategory/sieve");
  return {
    courseCategories,
  };
};

export default CourseCategories;
