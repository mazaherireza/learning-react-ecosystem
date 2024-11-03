export function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case "INC":
      return { counter: state.counter + 1 };
    case "DEC":
      return { counter: state.counter - 1 };
    default:
      return { counter: state.counter };
  }
}
