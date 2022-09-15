const SET_CARD = "SET_CARD";
const ADD_CARD = "ADD_CARD";

export const setCard = (recipe) => {
  return {
    type: SET_CARD,
    recipe,
  };
};

export const addCard = (recipe) => {
  return {
    type: ADD_CARD,
    recipe,
  };
};
