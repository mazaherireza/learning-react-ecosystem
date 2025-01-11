import { add, remove } from "./types.js";

const addAction = (title) => ({ type: add, title });
const removeAction = (title) => ({ type: remove, title });

export { addAction, removeAction };
