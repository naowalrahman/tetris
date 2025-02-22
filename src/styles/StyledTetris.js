import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding-top: 10px;
  }
`;

export const StyledTetris = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  gap: 20px;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 5px;
    height: calc(100vh - 20px);
    justify-content: flex-start;
  }

  aside {
    width: 100%;
    max-width: 250px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      flex-direction: row;
      max-width: 100%;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;
      margin: 5px 0;

      > div {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }

  .mobile-controls {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    width: 100%;
    max-width: 300px;
    margin: 20px auto;

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 15px;
      padding: 10px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 10px;
      margin-bottom: 20px;
    }

    button {
      background: #333;
      border: 2px solid #666;
      border-radius: 50%;
      color: white;
      width: 60px;
      height: 60px;
      font-size: 24px;
      cursor: pointer;
      touch-action: manipulation;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      &:active {
        background: #444;
        transform: scale(0.95);
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
      }

      &.drop {
        grid-column: 2;
        grid-row: 2;
      }
    }
  }
`;
