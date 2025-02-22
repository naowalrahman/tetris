import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.height}, calc(min(35px, 5vh)));
  grid-template-columns: repeat(${props => props.width}, calc(min(35px, 5vh)));
  grid-gap: 1px;
  border: 2px solid #333;
  width: fit-content;
  max-width: 100%;
  background: #111;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-rows: repeat(${props => props.height}, calc(min(25px, 4vh)));
    grid-template-columns: repeat(${props => props.width}, calc(min(25px, 4vh)));
  }
`;
