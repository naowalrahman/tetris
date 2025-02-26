import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
    padding: 12px 15px;
    border: none;
    min-height: 30px;
    width: 100%;
    border-radius: 15px;
    color: ${props => (props.gameOver ? '#ff6b6b' : '#fff')};
    background: ${props =>
        props.gameOver
            ? 'linear-gradient(135deg, rgba(220, 20, 60, 0.8), rgba(139, 0, 0, 0.9))'
            : 'linear-gradient(135deg, rgba(41, 50, 65, 0.8), rgba(27, 35, 46, 0.9))'};
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-align: center;
    justify-content: center;
    box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.2),
        inset 0 1px 1px rgba(255, 255, 255, 0.1);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    ${props =>
        props.gameOver &&
        `
    animation: pulsate 1.5s infinite alternate;
    @keyframes pulsate {
      0% { transform: scale(1); }
      100% { transform: scale(1.03); }
    }
  `}

    @media (max-width: 768px) {
        margin: 0;
        padding: 8px 12px;
        font-size: 0.75rem;
        min-height: auto;
        width: auto;
        min-width: 70px;
        flex-shrink: 1;
    }
`;
