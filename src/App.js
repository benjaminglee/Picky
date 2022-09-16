import RecipeCard from "./components/RecipeCard";
import CardContainer from "./components/CardContainer";
import { useEffect, useState } from "react";
import getRecipe from "./api/getRecipe";
import { useSelector } from "react-redux";
import TableContainer from "./components/TableContainer";
import ContainerForTableContainer from "./components/ContainerForTableContainer";

function App() {
  const recipes = useSelector((state) => state.recipes);
  const saved = useSelector((state) => state.savedRecipes);
  return (
    <div className="App">
      <CardContainer />
      <div className="table">
        <ContainerForTableContainer saved={saved} recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
