import CardContainer from "./components/CardContainer";
import React from "react";
import { useSelector } from "react-redux";
import ContainerForTableContainer from "./components/ContainerForTableContainer";
import PdfEndScreen from "./components/PdfEndScreen";

function App() {
  const recipes = useSelector((state) => state.recipes);
  const saved = useSelector((state) => state.savedRecipes);
  const [clicked, setClicked] = React.useState(false);
  return (
    <div className="App">
      {!clicked && saved.length < 10 ? (
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
        </>
      )}
    </div>
  );
}

export default App;
