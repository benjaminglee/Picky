import axios from "axios";

const getRecipe = async () => {
  try {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getIngredients = (recipe) => {
  const amounts = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe.strIngredient1) {
      let itm = recipe[`strIngredient${i}`];
      if (itm && itm !== "") amounts.push(`${recipe[`strMeasure${i}`]} ${itm}`);
    } else return amounts;
  }
  return amounts;
};

export default getRecipe;
