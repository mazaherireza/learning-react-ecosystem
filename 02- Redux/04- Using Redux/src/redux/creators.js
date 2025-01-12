import { dec, reset, inc } from "./types";

const decAction = () => ({ type: dec });
const resetAction = () => ({ type: reset });
const incAction = () => ({ type: inc });

export { decAction, resetAction, incAction };
