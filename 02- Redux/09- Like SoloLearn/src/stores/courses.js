import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const NAME = "Courses";

const initialState = { courses: [] };

const coursesSlice = createSlice({
  name: `${NAME}`,
  initialState,
  reducers: {
    addCourseAction: (state, { payload }) => {
      state.todos.push(payload);
    },
  },
  extraReducers: () => {},
});

export const { addCourseAction } = coursesSlice.actions;
export default coursesSlice.reducer;
