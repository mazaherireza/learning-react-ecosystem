import { dec, reset, inc } from "./types.js";

const decAction = () => ({ type: dec });
const resetAction = () => ({ type: reset });
const incAction = () => ({ type: inc });

export { decAction, resetAction, incAction };
