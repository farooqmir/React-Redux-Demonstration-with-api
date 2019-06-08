import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import articlesReducer from "./articlesReducer";

/**
 * Root reducer for the applciation
 * @param {} history
 */
const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    articles: articlesReducer
  });

export default rootReducer;
