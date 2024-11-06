import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  all:unset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  background-color: ${({ theme }) => theme.Background};
  color: ${({ theme }) => theme.darkBlue};
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  box-shadow:
  6px 6px 6px rgba(0,0,0,0.05),
  -6px -6px 6px rgba(255,255,255,0.6),
  inset 2px 2px 5px rgba(0,0,0,0.03),
  inset -2px -2px 5px rgba(255,255,255,0.4);
  transition: all 0.3s;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.25rem;
  font-size: 1rem;
  &:hover {
    background: ${({ theme }) => theme.middleBlue};
  }

`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;