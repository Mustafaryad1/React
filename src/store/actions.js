import * as TYPES from "./types";

export const changeLanguageAction = (payload) => { 
  return {
    type: TYPES.CHANGE_LANGUAGE,
    payload,
  };
};

export const addToCartAction = (payload) => {
  return {
    type: TYPES.ADD_TO_CART,
    payload,
  };
};
