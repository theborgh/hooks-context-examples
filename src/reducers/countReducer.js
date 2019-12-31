import constants from "./constants";

export default (state, action) => {
  switch (action.type) {
    case constants.ADD_1:
      return state + 1;
    case constants.SUBTRACT_1:
      return state - 1;
    default:
      return state;
  }
};
