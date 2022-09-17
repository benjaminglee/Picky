import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";

function PdfEndScreen({ saved, recipes }) {
  //ending screen conditionally loaded in on 10 recipes saved or table container component double clicked.'
  //includes button to generate and download pdf of selected recipes
  const [clicked, setClicked] = useState(false);
  const nameInput = useRef(null);
  const generatePDF = () => {
    const pdf = new jsPDF("p", "pt", "a4");

    //creare recipe from useRef
    pdf.html(nameInput.current, {
      callback: function (pdf) {
        const pageCount = pdf.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.setTextColor(255, 255, 255);
        pdf.setFillColor(255, 127, 80);
        pdf.rect(0, 0, 600, 900, "F");

        if (!saved.length) {
          pdf.setFontSize(50);
          pdf.text("Hey Silly Goose!", 100, 100);
          pdf.setFontSize(40);
          pdf.text("You need to add some", 100, 200);
          pdf.text("recipes first, please come", 100, 250);
          pdf.text("back after selecting", 100, 300);
          pdf.text("a few cards!", 100, 350);
          pdf.addImage(`../../pickySplash_0000_Layer-4.png`, 90, 400, 400, 400);
        } else {
          pdf.setFillColor(255, 255, 255);
          pdf.rect(400, 0, 300, 900, "F");
        }
        for (let i = 0; i < saved.length; i++) {
          const recipe = saved[i];
          const y = 70 * (i + 1);
          pdf.setFont("Helvetica", "bold");
          pdf.setTextColor(255, 255, 255);
          pdf.setFontSize(16);
          pdf.text(
            `${i + 1}) ${recipe.strMeal}`,
            30,
            y - 23 + i * 6 * (1 + i / 12)
          );
          pdf.setFontSize(13);
          pdf.setFont("Helvetica", "bolditalic");
          pdf.addImage(`${recipe.strMealThumb}`, 460, y - 60 + 11 * i, 90, 65);
          pdf.setTextColor(154, 53, 16);
          pdf.textWithLink(
            "Get the Recipe!",
            50,
            y - 3 + i * 6 * (1 + i / 11),
            {
              url: `${recipe.strSource}`,
            }
          );
        }
        pdf.save(`${new Date().toJSON().slice(0, 10)}_recipes_preview`);
      },
    });
  };
  return (
    <>
      <div id="pdf-content" ref={nameInput}></div>
      <motion.div
        className="endScreen"
        initial={{
          opacity: 0.5,
        }}
        animate={{
          scale: [0.3, 1],
          y: [100, -2000, 0],
          opacity: [0, 0.8, 1],
        }}
        transition={{
          stiffness: 100,
          type: "spring",
          duration: 1.3,
        }}
      >
        <div className="endScreenTextContainer">
          <div className="endScreenText  thankyou">
            <img
              id="tinyImage"
              src="../pickySplash_0000_Layer-4.png"
              alt="comatose goose"
            />
            <div className="thankyouBox">
              Thanks for being <span className="picky">Picky!</span>
            </div>
          </div>
          <div>
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
              <span className="recipeCount endScreenTextFrag">
                {saved.length}
              </span>{" "}
              <span className="endScreenTextFrag">recipes!</span>
            </div>
            <div className="endScreenText">
              Use the button below to generate a PDF with links to the actual
              recipes from your saved cards.
            </div>
          </div>
          <div className="endScreenText" id="happyEating">
            Happy Eating!
          </div>
          <button
            className={clicked ? "selectedPdfButton" : "pdfButton"}
            type="primary"
            onClick={() => {
              setClicked(true);
              generatePDF();
            }}
          >
            {clicked ? "Enjoy!" : "Download PDF"}
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default PdfEndScreen;
