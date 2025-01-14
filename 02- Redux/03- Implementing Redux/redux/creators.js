import { add, remove } from "./types.js";

const addAction = (title) => ({ type: add, payload: title });
const removeAction = (title) => ({ type: remove, payload: title });

export { addAction, removeAction };
