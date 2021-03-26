import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducers
import test from './testReducer'

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    test,
  });
export default rootReducer;
