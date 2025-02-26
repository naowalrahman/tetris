import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const buttonBase = `
  box-sizing: border-box;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 1rem;
    min-height: auto;
    min-width: 100px;
    width: auto;
  }
`;

export const StyledStartButton = styled.button`
    ${buttonBase}
    margin: 0 0 10px 0;
    background: linear-gradient(135deg, #4caf50, #2e7d32);
    animation: ${pulse} 2s infinite ease-in-out;

    &:hover {
        background: linear-gradient(135deg, #66bb6a, #388e3c);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const StyledResetButton = styled.button`
    ${buttonBase}
    margin: 0;
    background: linear-gradient(135deg, #f44336, #c62828);

    &:hover {
        background: linear-gradient(135deg, #ef5350, #d32f2f);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;
