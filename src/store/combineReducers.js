import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import languageReducer from "./languageReducer";

export default combineReducers({
  cart : cartReducer,
  lang : languageReducer,
});
