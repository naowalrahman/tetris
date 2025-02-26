import React from 'react';
import { StyledStage } from '../styles/StyledStage';
import Cell from './Cell';

const Stage = ({ stage, ghostPosition }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map((row, y) =>
            row.map((cell, x) => {
                let isGhost = false;
                const type = cell[0];

                // Only check for ghost if the current cell is empty (type === 0)
                if (type === 0 && ghostPosition && ghostPosition.tetromino) {
                    const { tetromino, pos } = ghostPosition;
                    const tetrominoY = y - pos.y;
                    const tetrominoX = x - pos.x;

                    if (
                        tetrominoY >= 0 &&
                        tetrominoY < tetromino.length &&
                        tetrominoX >= 0 &&
                        tetrominoX < tetromino[0].length &&
                        tetromino[tetrominoY][tetrominoX] !== 0
                    ) {
                        isGhost = true;
                    }
                }

                return <Cell key={x} type={type} ghost={isGhost} />;
            })
        )}
    </StyledStage>
);

export default Stage;
