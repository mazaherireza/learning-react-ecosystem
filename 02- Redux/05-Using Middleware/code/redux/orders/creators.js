import { add, remove } from "./types.js";

const addOrderAction = (order) => ({ type: add, payload: order });
const removeOrderAction = (_id) => ({ type: remove, payload: _id });

export { addOrderAction, removeOrderAction };
