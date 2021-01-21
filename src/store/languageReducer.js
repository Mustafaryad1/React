import * as TYPES from "./types";

export default (
  state = {
    lang: "en",
  },
  action
) => {
  switch (action.type) {
    case TYPES.CHANGE_LANGUAGE:
      return {
        ...state,
        lang:action.payload,
      };
      break;
    default:
      return state;
  }
};
