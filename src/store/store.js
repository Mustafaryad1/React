import { createStore} from "redux";
import reducers from "./combineReducers";

//redux dev tool
const devDebugger =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, devDebugger );

export default store;

