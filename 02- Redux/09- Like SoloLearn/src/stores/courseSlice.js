import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const NAME = "Courses";

export const fetchCourses = createAsyncThunk(
  `${NAME}/fetchCourses`,
  async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }
);

const slice = createSlice({
  name: `${NAME}`,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled), (state, action) => action.payload;
  },
});

export default slice.reducer;