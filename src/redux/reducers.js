import { combineReducers } from "redux";

const SET_CARD = "SET_CARD";
const ADD_CARD = "ADD_CARD";

const singleCardReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CARD:
      return [...state, action.recipe];
    default:
      return state;
  }
};

const savedCardReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.recipe];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  recipes: singleCardReducer,
  savedRecipes: savedCardReducer,
});

export default rootReducer;
