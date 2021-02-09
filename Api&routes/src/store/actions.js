import * as TYPES from './types' 
import axios from 'axios';

export const IncreaseCounter = (payload) => {
  return {
    type: TYPES.COUNTER,
    payload: payload
  }
}
export const ChangeLanguage = (payload) => {
  return {
    type: TYPES.LANGUAGE,
    payload: payload
  }
}
export const UserLogin = (payload) => {
  return {
    type: TYPES.LOGIN,
    payload: payload
  }
}





export const GetProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    // console.log(response);
    dispatch({
      type: TYPES.PRODUCTS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const GetUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/users`);
    console.log(response.data);
    dispatch({
      type: TYPES.USERS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

