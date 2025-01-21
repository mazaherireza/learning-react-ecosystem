import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [...state.courses, course],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
  },
});

const useCourseStore = create(devtools(persist(store, { name: "courses" })));

export default useCourseStore;
