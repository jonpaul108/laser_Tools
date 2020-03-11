import React from "react";
import Minesweeper from './utils/utils';



const App = () => {
  const newGame = new Minesweeper(10 ,10, 10);
  newGame.makeGrid();

  return (
    <div>{newGame.displayGrid.map((row) => {
    return <div>{row}</div>
    })}</div>
  )
}


export default App;