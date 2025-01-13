const create = "TODO/CREATE";
const remove = "TODO/REMOVE";

const reducer = (state = [], action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case create:
      return [...state, payload];

    case remove:
      return [...state].filter((todo) => todo._id !== payload);

    default:
      return state;
  }
};
export default reducer;

export const createTodoAction = (todo) => ({ type: create, payload: todo });
export const removeTodoAction = (_id) => ({ type: remove, payload: _id });
