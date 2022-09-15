import axios from "axios";

const DELETE_CARD = "DELETE_CARD";
const SET_CARD = "SET_CARD";
const ADD_CARD = "ADD_CARD";

const _deleteCard = (recipe) => {
  return {
    type: DELETE_CARD,
    recipe,
  };
};

const _setCard = (recipe) => {
  return {
    type: SET_CARD,
    recipe,
  };
};

const _addCard = (recipe) => {
  return {
    type: ADD_CARD,
    recipe,
  };
};

export const deleteCard = (recipe) => {
  return async function (dispatch) {
    try {
      await dispatch(_deleteCard(recipe));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCard = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const recipe = data.meals[0];
      dispatch(_setCard(recipe));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCard = (recipe) => {
  return async function (dispatch) {
    try {
      await dispatch(_addCard(recipe));
    } catch (error) {
      console.log(error);
    }
  };
};
