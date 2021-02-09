import * as TYPES from "../types/types";

export default (state = [], action) => {
  switch (action.type) {
    case TYPES.GET_USERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
