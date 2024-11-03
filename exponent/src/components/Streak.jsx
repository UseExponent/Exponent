import styled from 'styled-components';
import { format, sub } from "date-fns";

const StyledStreak = styled.ol`
    position: relative;
    display: grid;
    width: 90vw;
    grid-template-columns: repeat(22, 1fr);
    grid-template-rows: repeat(${(props) => props.Layer}, 1fr);
    place-items: center;
    height: calc(${(props) => props.Layer} * 1rem);
    background: #fff;
    border-radius: 3px;

    background-color: #f1f8fd;
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #222e51;
    box-shadow:
    6px 6px 6px rgba(0,0,0,0.05),
    -6px -6px 6px rgba(255,255,255,0.6),
    inset 2px 2px 5px rgba(0,0,0,0.03),
    inset -2px -2px 5px rgba(255,255,255,0.4);
    transition: all 0.3s;

    margin: .2rem auto 0 auto;
    padding: 8px ;

    li{
        position: relative;
        width: 90%;
        height: 95%;
        border-radius: 5px;
        background: ${({ theme }) => theme.darkBlue};
        cursor: pointer;
        transition: all .2s;
        &::after{
            content: attr(data-date);
            display: none;
            position: absolute;
            width: max-content;
            opacity: 0;
            left: 50%;
            top: 0%;
            transform: translate(-50%, -140%);
            font-size: 5px;
            background: ${({ theme }) => theme.lightBlue};
            color: #333;
            padding: 4px 6px;
            border-radius: 4px;
            transition: all .2s;
            z-index: 10;
        }
        &::before{
            content: '';
            display: none;
            position: absolute;
            left: 50%;
            top: 0%;
            width: 0;
            height: 0;
            opacity: 0;
            transform: translate(-50%, -100%);
            transition: all .2s;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 10px solid ${({ theme }) => theme.lightBlue};
        }
        &:hover{
            &::after{
                display: block;
                opacity: 1;
            }
            &::before{
                display: block;
                opacity: 1;
            }
        }
    }
`;

const Streak = (props) => {
    // props.Layer = 1층 2층 3층 4층에 따른 구현 컴포넌트
    const dateFns = new Date();
    const blocks = []; let i = 0;
    if(props.Layer == 1){i = 22}else if(props.Layer == 2){i = 44}else if(props.Layer == 3){i = 66}else if(props.Layer == 4){i = 88}else{i = 22}
    for(let j = 0; j < i; j++){blocks.push(format(sub(dateFns, {days: j}), 'yyyy-MM-dd'))}

  return (
    <StyledStreak Layer = {props.Layer}>
        {blocks.map(nav => (
            <li data-date={nav}></li>
        ))}
    </StyledStreak>
  )
}

export default Streak;