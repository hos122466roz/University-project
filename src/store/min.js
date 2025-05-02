import { combineReducers  } from "redux";
import { authReducer } from "./reducers/auth";

const rooted = combineReducers ({
  authReducer,
});
export default rooted;
