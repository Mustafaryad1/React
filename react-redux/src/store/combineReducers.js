import { combineReducers } from "redux";
import cartReducer from "./reducers/CartReducer";
import languageReducer from "./reducers/languageReducer";
import usereReducer from "./reducers/usereReducer";

export default combineReducers({
  cart : cartReducer,
  lang : languageReducer,
  users : usereReducer
});
