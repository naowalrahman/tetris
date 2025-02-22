import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 1200px;
  gap: 40px;

  aside {
    width: 100%;
    max-width: 250px;
    display: block;
  }
`;
