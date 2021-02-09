import * as TYPES from "../types/types";

export default (
  state = {
    cartCount : 0
  },
  action
) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      return {
        ...state,
        cartCount: action.payload,
      };
      break;
    default:
      return state;
  }
};
