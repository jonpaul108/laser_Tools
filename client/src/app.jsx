import React, { useState } from "react";
import Grid from "./grid.jsx";
// import Minesweeper from './utils/utils';



const App = () => {
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [bombs, setBombs] = useState(10);
  const [locations, setLocations] = useState(new Set());
  const [grid, setGrid] = useState(null);
  const [displayGrid, setDisplayGrid] = useState(null);

  const makeGrid = () => {

    class Tile {
       constructor() {
        this.bomb = false;
        this.revealed = false;
        this.num = 0;
       }
    }

    this.grid = new Array(this.r).fill(null).map(
        () => (
          (new Array(this.c).fill(null).map(
            () => (
              new Tile()
            )
          ))
        )
    );
    this.plantBombs(this.bombs);
    this.coorStore.forEach(this.countBombs.bind(this));
    this.displayGrid = this.grid.map((row) => {
        return row.map((tile) => {
          if (tile.bomb) {
            return "b"
          } else {
            return tile.num;
          }
        })
      })
     
  }







  
  // const newGame = new Minesweeper(10 ,10, 10);
  // newGame.makeGrid();

  return (
    <div><Grid row={row} col={col} bombs={bombs}/></div>
  )
}


export default App;