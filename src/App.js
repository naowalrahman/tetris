import React from 'react';
import Tetris from './components/Tetris';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000;
  }
`;

const App = () => (
    <div className="App">
        <GlobalStyles />
        <Tetris />
    </div>
);

export default App;
