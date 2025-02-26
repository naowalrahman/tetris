import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="rgba(255,255,255,0.03)" width="50" height="50" x="0" y="0" /><rect fill="rgba(255,255,255,0.03)" width="50" height="50" x="50" y="50" /></svg>');
        background-size: 30px 30px;
        opacity: 0.5;
        z-index: 0;
    }

    @media (max-width: 768px) {
        align-items: flex-start;
        padding-top: 5px;
        height: 100%;
        overflow-y: auto;
    }
`;

export const StyledTetris = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 20px;
    margin: 0 auto;
    max-width: 1200px;
    gap: 20px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 1;

    @media (min-width: 769px) {
        flex-wrap: nowrap;
        justify-content: center;
    }

    @media (max-width: 768px) {
        padding: 10px;
        gap: 10px;
        width: 100%;
        flex-direction: column;
        align-items: center;
        border-radius: 0;
        height: auto;
        min-height: 100%;
    }

    aside {
        width: 100%;
        max-width: 220px;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.2);
        padding: 15px;
        border-radius: 15px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        flex-shrink: 0;

        @media (max-width: 768px) {
            max-width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            order: 1;

            .info-panel {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                justify-content: center;
                width: 100%;
            }

            .buttons {
                display: flex;
                gap: 8px;
                justify-content: center;
                width: 100%;
            }
        }
    }

    .game-area {
        position: relative;
        z-index: 2;
        margin: 0 auto;
        flex-shrink: 0;
        outline: none;

        &:focus {
            box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
        }

        @media (max-width: 768px) {
            transform: scale(0.95);
            order: 0;
        }
    }

    .controls-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        flex-shrink: 0;

        @media (min-width: 769px) {
            margin-left: 10px;
        }

        @media (max-width: 768px) {
            width: 100%;
            order: 2;
            margin-top: 10px;
        }
    }

    .game-controls {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 8px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 15px;
        width: 100%;
        max-width: 180px;
        z-index: 10;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

        @media (min-width: 769px) {
            position: relative;
            opacity: 0.9;
            transition: opacity 0.3s;

            &:hover {
                opacity: 1;
            }
        }

        @media (max-width: 768px) {
            margin: 0 auto;
            position: relative;
            transform: none;
            max-width: 180px;
        }

        button {
            background: linear-gradient(135deg, #333, #222);
            border: 2px solid #555;
            border-radius: 50%;
            color: white;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            touch-action: manipulation;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            box-shadow:
                0 4px 8px rgba(0, 0, 0, 0.3),
                inset 0 1px 1px rgba(255, 255, 255, 0.1);
            transition: all 0.2s ease;

            @media (max-width: 768px) {
                width: 45px;
                height: 45px;
                font-size: 18px;
            }

            &:active {
                background: linear-gradient(135deg, #444, #333);
                transform: scale(0.92) translateY(2px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
            }

            &.left {
                grid-column: 1;
                grid-row: 1;
            }

            &.right {
                grid-column: 3;
                grid-row: 1;
            }

            &.rotate {
                grid-column: 2;
                grid-row: 1;
                background: linear-gradient(135deg, #4a5568, #2d3748);
            }

            &.drop {
                grid-column: 2;
                grid-row: 2;
                background: linear-gradient(135deg, #48bb78, #38a169);

                &:active {
                    background: linear-gradient(135deg, #38a169, #2f855a);
                }
            }
        }
    }

    .instructions {
        margin-top: 20px;
        padding: 15px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        font-size: 0.85rem;
        color: #fff;
        transition: opacity 0.3s ease;

        @media (min-width: 769px) {
            position: relative;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }

            p {
                margin: 8px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;

                &::before {
                    content: '⌨️';
                    font-size: 1.1em;
                }
            }
        }

        @media (max-width: 768px) {
            display: none;
        }
    }
`;
