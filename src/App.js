import CardContainer from "./components/CardContainer";
import React from "react";
import { useSelector } from "react-redux";
import ContainerForTableContainer from "./components/ContainerForTableContainer";
import PdfEndScreen from "./components/PdfEndScreen";
import Splash from "./components/Splash";

function App() {
  const recipes = useSelector((state) => state.recipes);
  const saved = useSelector((state) => state.savedRecipes);
  const [clicked, setClicked] = React.useState(false);
  const [enteredSite, setEnteredSite] = React.useState(false);
  const [gateCount, setGateCount] = React.useState(0);
  return (
    <div className="App">
      {gateCount < 4 ? (
        <Splash gateCount={gateCount} setGateCount={setGateCount} />
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
          <div className="credits2">Hungry for more?</div>
          <div className="credits3">
            Check out <a href="https://github.com/benjaminglee">my github!</a>
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
          <div className="credits">Created by Ben Lee | 2022</div>
          <div className="credits2">Hungry for more?</div>
          <div className="credits3">
            Check out <a href="https://github.com/benjaminglee">my github!</a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
