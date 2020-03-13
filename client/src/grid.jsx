import React, { useState } from "react";
import Tile from "./tile.jsx";

const Grid = ({row, col, bombs}) => {
  const Node = function(loc) {
    this.bomb = false;
    this.revealed = false;
    this.num = 0;
    this.loc = loc;
  }
  // const makeGrid = (row, col) => {
  //   const newGrid = new Array(row).fill(null).map(
  //     (el, rowInd) => (
  //       (new Array(col).fill(null).map(
  //         (el, colInd) => (
  //           new Node({r: rowInd, c: colInd})
  //         )
  //       ))
  //     )
  //   )
  //   return newGrid;
  //   // if (!grid) {
  //   //   setGrid(newGrid);
  //   // }
  // }

  // const [grid, setGrid] = useState(null);
  const [grid, setGrid] = useState(() => {
    const newGrid = new Array(row).fill(null).map(
      (el, rowInd) => (
        (new Array(col).fill(null).map(
          (el, colInd) => (
            new Node({r: rowInd, c: colInd})
          )
        ))
      )
    )
    const locations = new Set();
    ((num) => {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      } 
      while (locations.size < num) {    
        let coords = {
          r: getRandomInt(row),
          c: getRandomInt(col),
        };
        if (!locations.has(JSON.stringify(coords))) {
          newGrid[coords.r][coords.c].bomb = true;
          locations.add(JSON.stringify(coords));
        }
      }
    })(bombs);

    function countBombs(el) {
      let coords = JSON.parse(el);
      // right
      if (newGrid[coords.r][coords.c + 1]) {
        newGrid[coords.r][coords.c + 1].num++;
      }
      // left
      if (newGrid[coords.r][coords.c - 1]) {
        newGrid[coords.r][coords.c - 1].num++;
      }
      // down
      if (newGrid[coords.r + 1] && newGrid[coords.r + 1][coords.c]) {
        newGrid[coords.r + 1][coords.c].num++;
      }
      // up
      if (newGrid[coords.r - 1] && newGrid[coords.r - 1][coords.c]) {
        newGrid[coords.r - 1][coords.c].num++;
      }
      // down right
      if (newGrid[coords.r + 1] && newGrid[coords.r + 1][coords.c + 1]) {
        newGrid[coords.r + 1][coords.c + 1].num++;
      }
      // down left
      if (newGrid[coords.r + 1] && newGrid[coords.r + 1][coords.c - 1]) {
        newGrid[coords.r + 1][coords.c - 1].num++;
      }  
      // up right
      if (newGrid[coords.r - 1] && newGrid[coords.r - 1][coords.c + 1]) {
        newGrid[coords.r - 1][coords.c + 1].num++;
      }
      // up left
      if (newGrid[coords.r - 1] && newGrid[coords.r - 1][coords.c - 1]) {
        newGrid[coords.r - 1][coords.c - 1].num++;
      }
    }    
    locations.forEach(countBombs);

    return newGrid;
  });
  // const [locations, setLocations] = useState(new Set());

  
  const plantBombs = (num) => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    } 
    while (locations.size < num) {    
      let coords = {
        r: getRandomInt(row),
        c: getRandomInt(col),
      };
      if (!locations.has(JSON.stringify(coords))) {
        grid[coords.r][coords.c].bomb = true;
        locations.add(JSON.stringify(coords));
      }
    }
  }

  // makeGrid(row, col);
  // plantBombs(bombs);
  console.log(grid);
return <div></div>
}

export default Grid;