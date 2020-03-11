import React, { useState } from "react";

const Tile = ({reveal, display, coords}) => (
<button key={coords}>{coords}</button>
)


export default Tile;