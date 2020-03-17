import React, { useState } from "react";
import Grid from "./grid.jsx";
// import Minesweeper from './utils/utils';



const App = () => {
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [bombs, setBombs] = useState(10);
  const [grid, setGrid] = useState(null);
  const [displayGrid, setDisplayGrid] = useState(null);

  return (
    <div><Grid row={row} col={col} bombs={bombs} /></div>
  )
}


export default App;