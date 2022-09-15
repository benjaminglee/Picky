import { motion } from "framer-motion";

function TableContainer({ recipes, saved }) {
  return (
    <motion.div
      id="containerBack"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        id="containerFront"
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [2, 0, 2] }}
          transition={{ duration: 0.5 }}
          className="propCard"
          id="prop1"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-1, 0, -1] }}
          transition={{ duration: 0.5 }}
          className="propCard"
          id="prop2"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0.5, -3, 0.5] }}
          transition={{ duration: 0.5 }}
          className="propCard"
          id="prop3"
        ></motion.div>
      </motion.div>
      <motion.div
        id="containerFace"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="recipeCounter"
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.5 }}
        >
          {recipes.length === 1
            ? `You have ${saved.length} recipe${saved.length ? "" : "s"} saved!`
            : recipes.length
            ? `Out of ${recipes.length} recipes, you have ${saved.length} saved!`
            : "Plan your weekly meals! Click through recipe cards as you please. When you're finished, click here for your results."}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TableContainer;