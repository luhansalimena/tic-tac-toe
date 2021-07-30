import React from 'react';

import { FiCircle, FiX } from 'react-icons/fi'

const Tile = ({ classes, selected, index, handleTileClick }) => {

  return (
    <div onClick={() => handleTileClick(index)} className={`w-1/3 h-36 flex justify-center items-center text-white text-4xl cursor-pointer ${classes}`}>
      {selected === 1 && <FiX />}
      {selected === 0 && <FiCircle />}
    </div>
  );
}

export default Tile;