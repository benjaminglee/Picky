import React, { useState, useEffect } from "react";
import getRecipe, { getIngredients } from "../api/getRecipe";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addCard, setCard } from "../redux/actions";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const RecipeCard = ({ keyVal, setKeyVal }) => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({});
  const [measurements, setMeasurements] = useState([]);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const recipes = useSelector((state) => state.recipes);
  const saved = useSelector((state) => state.savedRecipes);
  console.log("render", { recipes }, { saved });
  useEffect(() => {
    const getData = async () => {
      const data = await getRecipe();
      let item = data.meals[0];
      while (recipes.find((recipe) => recipe.idMeal === item.idMeal)) {
        console.log("found existing item", item);
        console.log("searching for a unique recipe...");
        item = getData();
      }
      setRecipe(item);
      setMeasurements(getIngredients(item));
    };
    getData();
  }, [liked, disliked]);

  const handleLike = (e) => {
    setLiked(!liked);
    dispatch(addCard(recipe));
    dispatch(setCard(recipe));
    setTimeout(() => {
      setKeyVal(keyVal + 1);
    }, 500);
  };

  const handleDislike = (e) => {
    setDisliked(!disliked);
    dispatch(setCard(recipe));
    setTimeout(() => {
      setKeyVal(keyVal + 1);
    }, 500);
  };

  return (
    <motion.div
      className="cardContainer"
      initial={{
        y: 150,
        opacity: 0,
      }}
      animate={{
        y: 0,
        x: liked ? 1000 : disliked ? -1000 : null,
        opacity: liked ? 0 : disliked ? 0 : 1,
        rotate: liked ? 45 : disliked ? -45 : 0,
      }}
      transition={{
        stiffness: 100,
        type: "spring",
      }}
      drag
      dragConstraints={{
        right: 0.1,
        left: 0.1,
        top: 0.1,
        bottom: 0.1,
      }}
    >
      <div className="cardContents">
        <CardFront
          recipe={recipe}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
        <CardBack measurements={measurements} />
      </div>
    </motion.div>
  );
};

export default RecipeCard;
