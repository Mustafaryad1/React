import * as TYPES from "./types";

export default (state = {
  result:0,
  lan:"en",
  username:(localStorage.getItem("email"))?localStorage.getItem("email"):'login',
  products:[],
  users:[]
}, action) => {
  switch (action.type) {
    case TYPES.COUNTER:
      return {
        ...state,        // {result:1,lan:"en"}
        ...action.payload, // 
      };
    case TYPES.LANGUAGE:
        return {
          ...state,
          ...action.payload,
        };
    case TYPES.LOGIN:
        return {
          ...state,
          ...action.payload,
        };
    case TYPES.PRODUCTS:
          return {
            ...state,
            products: action.payload,
          };
    case TYPES.USERS:
            return {
              ...state,
              users: action.payload,
            };
    default:
      return state;
  }
};

