import React from 'react';
import { StyledCell } from '../styles/StyledCell';
import { TETROMINOS } from '../hooks/tetrominos';

const Cell = ({ type, ghost }) => {
  // For ghost pieces, we want to use the active tetromino's color
  const color = TETROMINOS[type] ? TETROMINOS[type].color : '0, 0, 0';
  return (
    <StyledCell 
      type={type}
      color={color}
      ghost={ghost}
    />
  );
};

// Optimization with React.memo
export default React.memo(Cell);
