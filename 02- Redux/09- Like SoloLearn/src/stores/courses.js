import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../constants/courses";

const NAME = "Courses";

const initialState = { courses: courses };

const coursesSlice = createSlice({
  name: `${NAME}`,
  initialState,
  reducers: {
    getCourseAction: (state, { payload }) => {
      const course = state.courses.find((course) => course._id == payload);
      return course;
    },
  },
  extraReducers: () => {},
});

export const { getCourseAction } = coursesSlice.actions;
export default coursesSlice.reducer;
