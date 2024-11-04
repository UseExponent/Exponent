import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    position: relative;
    width: 96%;
    padding: 0 2%;
    margin-top: 5rem;
    height: calc(100vh - 5rem - 65px);
    .top{
        h1{
            font-size: ${({theme}) => theme.lg};
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`;

function Section({ children, ...rest }) {
  return <StyledSection{...rest}>{children}</StyledSection>;
}

export default Section;