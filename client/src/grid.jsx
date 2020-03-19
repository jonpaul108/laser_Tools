import React, { useState } from "react";
import Tile from "./tile.jsx";

const Grid = ({row, col, bombs}) => {
  const Node = function(loc) {
    this.bomb = false;
    this.revealed = false;
    this.num = 0;
    this.loc = loc;
  }
  const [count, setCount] = useState(0);
  
const [locations, setLocations] = useState(null);
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
      setLocations(locations);
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

//      const reveal = (c) => {
//     console.log('helloWorld', c);
//     const newGrid =  grid;
//     ewGrid[c.loc.r][c.loc.r].revealed = true;
//     return newGrid;
      
//     setGrid( () => {
//       grid[r][c].revealed = true;
//       return grid;
//     });
//   }
// }

  const floodFill = (r, c, bomb) => {
    const newGrid = grid.slice();
    
 
    const reveal = (r, c) => {

      if (newGrid[r][c].revealed) {
        return;
      } else {
        newGrid[r][c].revealed = true;
      }
      if (bomb) {
        console.log('looooooooser');
        locations.forEach((loc) => {
          const bombLoc = JSON.parse(loc);
          newGrid[bombLoc.r][bombLoc.c].revealed = true;
        })
        return;
      }
      // right
      if (newGrid[r][c + 1] && !newGrid[r][c + 1].bomb && newGrid[r][c].num === 0) {
        reveal(r, c + 1);
      }
      // left
      if (newGrid[r][c - 1] && !newGrid[r][c - 1].bomb && newGrid[r][c].num === 0) {
        reveal(r, c - 1);
      }
      // down
      if (newGrid[r + 1] && newGrid[r + 1][c] && !newGrid[r + 1][c].bomb && newGrid[r][c.num] === 0) {
        reveal(r + 1, c);
      }
      // up
      if (newGrid[r - 1] && newGrid[r - 1][c] && !newGrid[r - 1][c].bomb && newGrid[r][c.num] === 0) {
        reveal(r - 1, c);
      }
      // down right
      if (newGrid[r + 1] && newGrid[r + 1][c + 1] && !newGrid[r + 1][c + 1].bomb && newGrid[r][c].num === 0) {
        reveal(r + 1, c + 1);
      }
      // down left
      if (newGrid[r + 1] && newGrid[r + 1][c - 1] && !newGrid[r + 1][c - 1].bomb && newGrid[r][c].num === 0) {
        reveal(r + 1, c - 1);
      }  
      // up right
      if (newGrid[r - 1] && newGrid[r - 1][c + 1] && !newGrid[r - 1][c + 1].bomb && newGrid[r][c].num === 0) {
        reveal(r - 1, c + 1);
      }
      // up left
      if (newGrid[r - 1] && newGrid[r - 1][c - 1] && !newGrid[r - 1][c - 1].bomb && newGrid[r][c].num === 0) {
        reveal(r - 1, c - 1);
      }
    }

    reveal(r, c);
  
      setGrid(newGrid);
  }

return <div>{grid.map((row, i) => {
  return <div>{row.map((col, y) => {
    return <Tile floodFill={floodFill} key={`[${i}][${y}]`} num={col.num} bomb={col.bomb} coords={{r: i, c: y}} reveal={col.revealed}/>
    // return <button onClick={(e) => setGrid(reveal(col))}>{(col.revealed) ? ((col.bomb) ? 'b' : col.num) : '?'}</button>
  })} </div>
})}
<button onClick={() => setCount(count + 1)}>{count}</button>
</div>
}

export default Grid;