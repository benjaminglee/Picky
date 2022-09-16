import RecipeCard from "./RecipeCard";
import React, { useEffect, useState } from "react";

function CardContainer() {
  //wrapper component for main card component. renders new card with updated key value
  const [keyVal, setKeyVal] = useState(0);
  useEffect(() => {
    console.log(keyVal);
  }, [keyVal]);
  return <RecipeCard key={keyVal} keyVal={keyVal} setKeyVal={setKeyVal} />;
}

export default CardContainer;
