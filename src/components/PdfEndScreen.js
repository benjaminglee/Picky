import React from "react";
import { motion } from "framer-motion";

function PdfEndScreen({ saved, recipes }) {
  return (
    <motion.div
      className="endScreen"
      initial={{
        y: 400,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 1,
        stiffness: 100,
        type: "spring",
      }}
    >
      <div className="endScreenTextContainer">
        <div className="endScreenText  thankyou">
          Thanks for using <div className="picky">Picky!</div>
        </div>
        <div className="endScreenText">
          We hope you have a fun selection of meals lined up for the coming
          week.
        </div>
        <div className="endScreenText">
          After going through{" "}
          <span className="recipeCount endScreenTextFrag">
            {recipes.length}{" "}
          </span>
          <span className="endScreenTextFrag"> cards, you saved </span>{" "}
          <span className="recipeCount endScreenTextFrag">{saved.length}</span>{" "}
          <span className="endScreenTextFrag">recipes!</span>
        </div>
        <div className="endScreenText">
          Use the button below to generate a PDF with links to the actual
          recipes referenced in the cards.
        </div>
        <div className="endScreenText" id="happyEating">
          Happy Eating!
        </div>
        <button className="pdfButton">Download PDF</button>
      </div>
    </motion.div>
  );
}

export default PdfEndScreen;
