import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 10px;
  border: 2px solid #333;
  min-height: 20px;
  width: 100%;
  border-radius: 10px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 0;
    padding: 8px;
    font-size: 0.8rem;
    min-height: auto;
    width: auto;
    min-width: 80px;
  }
`;
