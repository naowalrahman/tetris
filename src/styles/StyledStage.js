import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.height}, calc(min(35px, 5vh)));
  grid-template-columns: repeat(${props => props.width}, calc(min(35px, 5vh)));
  grid-gap: 1px;
  border: 2px solid #333;
  width: fit-content;
  max-width: 100%;
  background: linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%);
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 128, 0, 0.1), inset 0 0 10px rgba(0, 0, 0, 0.8);
  padding: 3px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, rgba(0, 255, 127, 0.3), transparent);
    border-radius: 6px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    grid-template-rows: repeat(${props => props.height}, calc(min(25px, 4vh)));
    grid-template-columns: repeat(${props => props.width}, calc(min(25px, 4vh)));
    padding: 2px;
  }
`;
