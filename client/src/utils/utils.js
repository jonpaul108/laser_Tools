class Minesweeper {
    constructor(r, c, bombs) {
        this.r = r;
        this.c = c;
        this.bombs = bombs;
        this.coorStore = new Set();
        this.grid = null;
        this.displayGrid = null;
    }
   
      
      makeGrid() {

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
                return "B"
              } else {
                return tile.num;
              }
            })
          })
        
        
      }

      plantBombs (num) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }    
        while (this.coorStore.size < num) {    
          let coords = {
            r: getRandomInt(this.r),
            c: getRandomInt(this.c),
          };
          if (!this.coorStore.has(JSON.stringify(coords))) {
            this.grid[coords.r][coords.c].bomb = true;
            this.coorStore.add(JSON.stringify(coords));
          }
        }
      }
      
      countBombs(el) {
        console.log("HELLLO!!!!", this)
        let coords = JSON.parse(el);
        // right
        if (this.grid[coords.r][coords.c + 1]) {
          this.grid[coords.r][coords.c + 1].num++;
        }
        // left
        if (this.grid[coords.r][coords.c - 1]) {
          this.grid[coords.r][coords.c - 1].num++;
        }
        // down
        if (this.grid[coords.r + 1] && this.grid[coords.r + 1][coords.c]) {
          this.grid[coords.r + 1][coords.c].num++;
        }
        // up
        if (this.grid[coords.r - 1] && this.grid[coords.r - 1][coords.c]) {
          this.grid[coords.r - 1][coords.c].num++;
        }
        // down right
        if (this.grid[coords.r + 1] && this.grid[coords.r + 1][coords.c + 1]) {
          this.grid[coords.r + 1][coords.c + 1].num++;
        }
        // down left
        if (this.grid[coords.r + 1] && this.grid[coords.r + 1][coords.c - 1]) {
          this.grid[coords.r + 1][coords.c - 1].num++;
        }  
        // up right
        if (this.grid[coords.r - 1] && this.grid[coords.r - 1][coords.c + 1]) {
          this.grid[coords.r - 1][coords.c + 1].num++;
        }
        // up left
        if (this.grid[coords.r - 1] && this.grid[coords.r - 1][coords.c - 1]) {
          this.grid[coords.r - 1][coords.c - 1].num++;
        }
      }
      
      
      reveal (r, c) {
        if (this.grid[r][c].revealed) {
          return;
        } else {
          this.grid[r][c].revealed = true;
        }
        // right
        if (this.grid[r][c + 1] && !this.grid[r][c + 1].bomb && this.grid[r][c].num === 0) {
          reveal(r, c + 1);
        }
        // left
        if (this.grid[r][c - 1] && !this.grid[r][c - 1].bomb && this.grid[r][c].num === 0) {
          reveal(r, c - 1);
        }
        // down
        if (this.grid[r + 1] && this.grid[r + 1][c] && !this.grid[r + 1][c].bomb && this.grid[r][c.num] === 0) {
          reveal(r + 1, c);
        }
        // up
        if (this.grid[r - 1] && this.grid[r - 1][c] && !this.grid[r - 1][c].bomb && this.grid[r][c.num] === 0) {
          reveal(r - 1, c);
        }
        // down right
        if (this.grid[r + 1] && this.grid[r + 1][c + 1] && !this.grid[r + 1][c + 1].bomb && this.grid[r][c].num === 0) {
          reveal(r + 1, c + 1);
        }
        // down left
        if (this.grid[r + 1] && this.grid[r + 1][c - 1] && !this.grid[r + 1][c - 1].bomb && this.grid[r][c].num === 0) {
          reveal(r + 1, c - 1);
        }  
        // up right
        if (this.grid[r - 1] && this.grid[r - 1][c + 1] && !this.grid[r - 1][c + 1].bomb && this.grid[r][c].num === 0) {
          reveal(r - 1, c + 1);
        }
        // up left
        if (this.grid[r - 1] && this.grid[r - 1][c - 1] && !this.grid[r - 1][c - 1].bomb && this.grid[r][c].num === 0) {
          reveal(r - 1, c - 1);
        }
      }
      
      
      
    //   displaythis.grid = this.grid.map((row) => {
    //     return row.map((tile) => {
    //       if (tile.bomb) {
    //         return "B"
    //       } else {
    //         return tile.num;
    //       }
    //     })
    //   })
      
    //   const revealthis.grid = this.grid.map((row) => {
    //     return row.map((tile) => {
    //       if (tile.revealed === true) {
    //         return tile.bomb ? "B" : tile.num;
    //       } else {
    //         return "?"
    //       }
    //     })
    //   })
      
}

export default Minesweeper;

