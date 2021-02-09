import * as TYPES from "../types/types";
import axios from "axios";

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

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/users");
    dispatch({
      type: TYPES.GET_USERS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
