import React, { useState } from "react";
import Tile from "./tile.jsx";

const Grid = ({row, col, bombs}) => {
  const [grid, setGrid] = useState(null);
  const makeGrid = (row, col) => {
    const newGrid = new Array(row).fill(null).map(
      () => {
        return <div>{new Array(col).fill(null).map(
          () => {
            return <Tile num={0} />
          }
        )}</div>
      }
    )
    // plantbombs
    // countbombs
    if (!grid) {
      setGrid(newGrid);
    }
  }
  makeGrid(10, 10)
return <div>{grid}</div>
}

export default Grid;