import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const NAME = "Todos";

export const fetchTodos = createAsyncThunk(
  `${NAME}/fetchtodos`,
  async (URL) => {
    const response = await fetch(URL);
    const todos = await response.json();
    return todos;
  }
);

const initialState = { todos: [] };

const todosSlice = createSlice({
  name: `${NAME}`,
  initialState,
  reducers: {
    createTodoAction: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodoAction: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, ({ todos }, { payload }) => {
      todos.push(...payload.slice(0, 12));
    });
  },
});

export const { createTodoAction, removeTodoAction } = todosSlice.actions;
export default todosSlice.reducer;
