import TableContainer from "./TableContainer";
import React, { useEffect, useState } from "react";

function ContainerForTableContainer({ saved, recipes }) {
  const [keyVal, setKeyVal] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (recipes.length) {
        setKeyVal(keyVal + 1);
      }
    }, 500);
  }, [recipes]);
  return <TableContainer key={keyVal} saved={saved} recipes={recipes} />;
}

export default ContainerForTableContainer;
