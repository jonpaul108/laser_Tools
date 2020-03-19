import React, { useState } from "react";

const Tile = ({reveal, bomb, num, floodFill, coords}) => {

  return <button onClick={(e) => floodFill(coords.r, coords.c, bomb)}>{(reveal) ? ((bomb) ? 'b' : ((num > 0) ? num : ' ')) : '?'}</button>
}


export default Tile;