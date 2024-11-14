import { dec, reset, inc } from "./redux/types.js";
import { decAction, resetAction, incAction } from "./redux/creators.js";

const $ = document;

const num = $.querySelector("#num");

const decBtn = $.querySelector("#dec");
const resetBtn = $.querySelector("#reset");
const incBtn = $.querySelector("#inc");

const reducer = (state = 13, { type }) => {
  switch (type) {
    case dec:
      return state - 1;
    case reset:
      return 13;
    case inc:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const updateDOM = () => {
  num.innerHTML = store.getState();
};

decBtn.onclick = () => {
  store.dispatch(decAction());
  updateDOM();
};

resetBtn.onclick = () => {
  store.dispatch(resetAction());
  updateDOM();
};

incBtn.onclick = () => {
  store.dispatch(incAction());
  updateDOM();
};
