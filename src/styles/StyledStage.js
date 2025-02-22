import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${props => props.height}, 35px);
  grid-template-columns: repeat(${props => props.width}, 35px);
  grid-gap: 1px;
  border: 2px solid #333;
  width: fit-content;
  max-width: 100%;
  background: #111;
`;
