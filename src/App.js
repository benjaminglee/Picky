import CardContainer from "./components/CardContainer";
import React from "react";
import { useSelector } from "react-redux";
import ContainerForTableContainer from "./components/ContainerForTableContainer";
import PdfEndScreen from "./components/PdfEndScreen";

function App() {
  const recipes = useSelector((state) => state.recipes);
  const saved = useSelector((state) => state.savedRecipes);
  const [clicked, setClicked] = React.useState(false);
  const [enteredSite, setEnteredSite] = React.useState(false);
  return (
    <div className="App">
      {!enteredSite ? (
        <div>
          <button
            onClick={() => {
              setEnteredSite(true);
            }}
          >
            Get Picky!
          </button>
        </div>
      ) : !clicked && saved.length < 10 ? (
        <>
          <CardContainer />
          <div
            className="endEarly"
            onDoubleClick={() => {
              setClicked(true);
            }}
          ></div>
          <div className="table">
            <ContainerForTableContainer
              saved={saved}
              recipes={recipes}
              clicked={clicked}
              setClicked={setClicked}
            />
          </div>
          <div className="credits">Created by Ben Lee | 2022</div>
        </>
      ) : (
        <>
          <PdfEndScreen saved={saved} recipes={recipes} />
          <div className="table">
            <ContainerForTableContainer
              saved={saved}
              recipes={recipes}
              clicked={clicked}
              setClicked={setClicked}
            />
          </div>
          <div className="credits">Created by Ben Lee | 2022</div>
        </>
      )}
    </div>
  );
}

export default App;
