import React, { useState, useRef, useEffect, useCallback } from 'react';

import { createStage, checkCollision } from '../gameHelpers';
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from '../styles/StyledTetris';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import ResetButton from './ResetButton';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [ghostPosition, setGhostPosition] = useState(null);
    const wrapperRef = useRef(null);
    const gameAreaRef = useRef(null);

    // For gesture controls
    const touchStartRef = useRef({ x: 0, y: 0, time: 0 });
    const touchEndRef = useRef({ x: 0, y: 0, time: 0 });
    const minSwipeDistance = 30;
    const maxTapDuration = 200;

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    // Calculate ghost position (where piece would land)
    useEffect(() => {
        if (!gameStarted || gameOver || !player) {
            setGhostPosition(null);
            return;
        }

        const calculateGhostPosition = () => {
            let ghostY = player.pos.y;

            while (!checkCollision(player, stage, { x: 0, y: ghostY - player.pos.y + 1 })) {
                ghostY++;
            }

            setGhostPosition({
                tetromino: player.tetromino,
                pos: { x: player.pos.x, y: ghostY },
            });
        };

        calculateGhostPosition();
    }, [gameStarted, gameOver, player, stage]);

    const movePlayer = useCallback(
        dir => {
            if (!checkCollision(player, stage, { x: dir, y: 0 })) {
                updatePlayerPos({ x: dir, y: 0 });
            }
        },
        [player, stage, updatePlayerPos]
    );

    const hardDrop = useCallback(() => {
        if (!gameStarted || gameOver) return;

        let dropDistance = 0;
        while (!checkCollision(player, stage, { x: 0, y: dropDistance + 1 })) {
            dropDistance++;
        }

        if (dropDistance > 0) {
            updatePlayerPos({ x: 0, y: dropDistance, collided: true });
            setDropTime(1000 / (level + 1) + 200);
        }
    }, [gameStarted, gameOver, player, stage, updatePlayerPos, level]);

    // Set up touch event handlers for gestures
    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const handleTouchStart = e => {
            // Don't prevent default for buttons
            if (e.target.tagName.toLowerCase() === 'button') {
                return;
            }
            e.preventDefault();
            const touch = e.touches[0];
            touchStartRef.current = {
                x: touch.clientX,
                y: touch.clientY,
                time: Date.now(),
            };
        };

        const handleTouchMove = e => {
            // Don't prevent default for buttons
            if (e.target.tagName.toLowerCase() === 'button') {
                return;
            }
            e.preventDefault();
        };

        const handleTouchEnd = e => {
            // Don't prevent default for buttons
            if (e.target.tagName.toLowerCase() === 'button') {
                return;
            }
            e.preventDefault();
            const touch = e.changedTouches[0];
            touchEndRef.current = {
                x: touch.clientX,
                y: touch.clientY,
                time: Date.now(),
            };

            const deltaX = touchEndRef.current.x - touchStartRef.current.x;
            const deltaY = touchEndRef.current.y - touchStartRef.current.y;
            const deltaTime = touchEndRef.current.time - touchStartRef.current.time;

            // Check for tap (quick touch)
            if (
                Math.abs(deltaX) < minSwipeDistance &&
                Math.abs(deltaY) < minSwipeDistance &&
                deltaTime < maxTapDuration
            ) {
                // Tap to rotate
                if (!gameOver && gameStarted) {
                    playerRotate(stage, 1);
                }
                return;
            }

            // Determine if it's a horizontal or vertical gesture
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal swipe
                if (Math.abs(deltaX) > minSwipeDistance) {
                    if (!gameOver && gameStarted) {
                        movePlayer(deltaX > 0 ? 1 : -1);
                    }
                }
            } else {
                // Vertical swipe
                if (Math.abs(deltaY) > minSwipeDistance) {
                    if (!gameOver && gameStarted) {
                        if (deltaY > 0) {
                            hardDrop();
                        }
                    }
                }
            }
        };

        wrapper.addEventListener('touchstart', handleTouchStart);
        wrapper.addEventListener('touchmove', handleTouchMove);
        wrapper.addEventListener('touchend', handleTouchEnd);

        return () => {
            wrapper.removeEventListener('touchstart', handleTouchStart);
            wrapper.removeEventListener('touchmove', handleTouchMove);
            wrapper.removeEventListener('touchend', handleTouchEnd);
        };
    }, [gameOver, gameStarted, hardDrop, movePlayer, playerRotate, stage]);

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
        setGameStarted(true);

        // Focus the wrapper instead of the game area
        if (wrapperRef.current) {
            wrapperRef.current.focus();
        }
    };

    const resetGame = () => {
        // Reset everything but don't start automatically
        setStage(createStage());
        setDropTime(null);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
        setGameStarted(false);
    };

    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (level + 1) + 200);
        }

        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false });
        } else {
            // Game over
            if (player.pos.y < 1) {
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    };

    const keyUp = ({ keyCode }) => {
        if (!gameOver && gameStarted) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    };

    const dropPlayer = () => {
        if (gameStarted) {
            setDropTime(null);
            drop();
        }
    };

    const move = ({ keyCode, key }) => {
        if (!gameOver && gameStarted) {
            if (keyCode === 37) { // left arrow
                movePlayer(-1);
            } else if (keyCode === 39) { // right arrow
                movePlayer(1);
            } else if (keyCode === 40) { // down arrow
                dropPlayer();
            } else if (keyCode === 38) { // up arrow
                playerRotate(stage, 1);
            } else if (key === 'd') {
                hardDrop();
            }
        }
    };

    useInterval(() => {
        drop();
    }, dropTime);

    return (
        <StyledTetrisWrapper
            ref={wrapperRef}
            role="button"
            tabIndex="0"
            onKeyDown={e => move(e)}
            onKeyUp={keyUp}
        >
            <StyledTetris>
                <div
                    className="game-area"
                    ref={gameAreaRef}
                    style={{ outline: 'none' }}  // Prevent focus outline
                    onKeyDown={e => e.preventDefault()}  // Prevent keyboard events
                >
                    <Stage stage={stage} ghostPosition={ghostPosition} />
                </div>

                <aside>
                    <div className="info-panel">
                        {gameOver ? (
                            <Display gameOver={gameOver} text="Game Over" />
                        ) : (
                            <>
                                <Display text={`Score: ${score}`} />
                                <Display text={`Rows: ${rows}`} />
                                <Display text={`Level: ${level}`} />
                            </>
                        )}
                        <div className="buttons">
                            <StartButton callback={startGame} />
                            <ResetButton callback={resetGame} />
                        </div>
                    </div>
                    <div className="instructions">
                        <p>↑ Rotate piece</p>
                        <p>← → Move horizontally</p>
                        <p>↓ Soft drop</p>
                        <p>d Quick drop</p>
                    </div>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
