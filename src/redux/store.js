import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
