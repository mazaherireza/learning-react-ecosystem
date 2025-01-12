const add = "ORDER/ADD";
const remove = "ORDER/REMOVE";

const reducer = (state = [], action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case add:
      return [...state, payload];
    case remove:
      return [...state].filter((order) => order._id != payload);
    default:
      return state;
  }
};
export default reducer;

export const addOrderAction = (order) => ({ type: add, payload: order });
export const removeOrderAction = (_id) => ({ type: remove, payload: _id });
