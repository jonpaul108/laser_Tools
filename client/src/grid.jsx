import React, { useState } from "react";
import Tile from "./tile.jsx";

const Grid = ({row, col, bombs}) => {
  const [grid, setGrid] = useState(null);
  const makeGrid = (row, col) => {
    const newGrid = new Array(row).fill(null).map(
      (el, rIndex) => {
        return <div>{new Array(col).fill(null).map(
          (el, cIndex) => {
            let coords = JSON.stringify({r:rIndex, c:cIndex})
            return <Tile key={coords} coords={coords} />
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
  makeGrid(row, col)
return <div>{grid}</div>
}

export default Grid;