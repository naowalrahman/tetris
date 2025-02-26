import React from 'react';
import { StyledResetButton } from '../styles/StyledStartButton';

const ResetButton = ({ callback }) => (
  <StyledResetButton onClick={callback}>Reset Game</StyledResetButton>
);

export default ResetButton;