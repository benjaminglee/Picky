import { IconContext } from "react-icons";
import { FaHeart, FaTimesCircle, FaHamburger } from "react-icons/fa";
import { motion } from "framer-motion";
import { loaderVariants, childVariants } from "./animation";

function CardFront({ recipe, handleLike, handleDislike }) {
  //front face of card containing image and like/dislike buttons. holding card triggers active css class
  //and flips to backside of card. icons trigger animations stored as objects in animations.js
  return (
    <div className="cardFront">
      <motion.div
        className="burgerContainer"
        variants={loaderVariants}
        initial="initial"
        animate="hidden"
      >
        <IconContext.Provider value={{ size: "80px", className: "burgerIcon" }}>
          <FaHamburger />
        </IconContext.Provider>
      </motion.div>
      <div className="recipeImage">
        <motion.img
          variants={childVariants}
          initial="hidden"
          animate="visible"
          src={`${recipe.strMealThumb}`}
          alt="food"
        />
      </div>
      <motion.div
        className={
          recipe.strMeal?.length > 33 ? "longRecipeTitle" : "recipeTitle"
        }
        variants={childVariants}
        initial="hidden"
        animate="visible"
      >
        {recipe.strMeal}
      </motion.div>
      <div className="ingredients">
        {recipe.strTags && recipe.strMeal?.length < 33 ? (
          recipe.strTags
            ?.split(",")
            .slice(0, 3)
            ?.map((tag) => {
              return (
                <motion.li
                  variants={childVariants}
                  initial="hidden"
                  animate="visible"
                  key={tag}
                  className="ingredient"
                >
                  {tag}
                </motion.li>
              );
            })
        ) : (
          <div className="tagFill"></div>
        )}
      </div>
      <motion.div
        variants={childVariants}
        initial="hidden"
        animate="visible"
        className="iconList"
      >
        <div
          className="xContainer"
          onMouseDown={() => {
            handleDislike();
          }}
        >
          <IconContext.Provider value={{ size: "30px", className: "x" }}>
            <FaTimesCircle />
          </IconContext.Provider>
        </div>
        <div
          className="heartContainer"
          onMouseDown={() => {
            handleLike();
          }}
        >
          <IconContext.Provider value={{ size: "30px", className: "heart" }}>
            <FaHeart />
          </IconContext.Provider>
        </div>
      </motion.div>
    </div>
  );
}

export default CardFront;
