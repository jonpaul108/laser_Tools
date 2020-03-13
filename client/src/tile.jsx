import React, { useState } from "react";

const Tile = ({reveal, display, coords, bomb = false}) => {

  return <button key={coords}>{(!reveal) ? "?" : display}</button>
}


export default Tile;