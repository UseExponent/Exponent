import React, { useEffect } from 'react';
import styled from 'styled-components';
import { format, sub } from "date-fns";

const StyledStreak = styled.ol`
    width: 100%;
    height: calc(${(props) => props.Layer} * 10rem);
    background: #fff;
    border-radius: 3px;
    box-shadow: inset 1px 1px 3px #333;
`;

const Streak = (props) => {
    const dateFns = new Date();
    let Formatted = format(dateFns, 'yyyy-MM-dd');
    const blocks = []; let i = 0;

    useEffect(() => {
        switch(props.Layer){
            case 1:
                i = 20;
            case 2:
                i = 40;
            case 3:
                i = 60
            case 4:
                i = 80;
        };
        for(let j = 0; j < i; j++){
            blocks.push(Formatted)
            sub(Formatted, { days: 1 });
        }
    }, [blocks, i]);

  return (
    <StyledStreak Layer = {props.Layer}>
        {blocks.map(nav => (
            <li
                className={nav}>
            </li>
        ))}
    </StyledStreak>
  )
}

export default Streak;