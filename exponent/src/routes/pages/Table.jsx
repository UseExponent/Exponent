import styled from "styled-components"
import Button from "../../components/button";
import Section from "../../components/Section";
import NowDate from "../../components/NowDate";
import Streak from "../../components/Streak";

const MainStyled = styled.div`
  .top{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40% 60%;
    span{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
  .bottom{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 90%;
    height: calc(99vh - 5rem - 10rem);
    /* div{
      display: grid;
      place-items: center;
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
    }*/
    .innerTop{
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      place-items: center;
      button{
        overflow: hidden;
        width: auto !important;
        font-size: ${({ theme }) => theme.sm};
        .dropbtn{
          font-size: 16px;  
          border: none;
          outline: none;
          padding: 14px 16px;
          background-color: inherit;
          font-family: inherit;
          margin: 0;
          color: ${({ theme }) => theme.darkBlue};
        }
      }
    }
    .innerBottom{
      position: relative;
      overflow-x: scroll;
      overflow-y: scroll;
    }







    
    .dropdown-content {
      display: none;
      position: absolute;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    .dropdown-content a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }
    .dropdown-content a:hover {
      background-color: #ddd;
    }
    .dropdown:hover .dropdown-content {
      display: block;
    }
  }
`

const TimeList = styled.div`
  color: ${({ theme }) => theme.darkBlue};
  gap: 4rem;
  width: 150%;
  height: 150%;
  div{
    width: 100%;
    height: 1rem;
    
    span{
      width: 4rem;
    }

    hr{
      flex: 1;
      height: 1px;
      border: none;
      background-color: ${({ theme }) => theme.Background};
    }

    &:last-child{
      padding-bottom: 2rem;
    }
  }
`


const TimeTableItem = styled.div`
  /* @media ${({ theme }) => theme.device.mobile} {
    width: calc(100% - 6rem);
    left: 5rem;
    display: ${({ $isSelected }) => ($isSelected ? "block" : "none")};
  } */
  position: absolute;
  width: calc((100% - 8rem) / 3);
  height: calc(5rem * 2);
  left: calc(6rem + ((100% - 8rem) / 3) * 2);
  top: calc((1.5rem + 5rem * 2));
  background-color: #333;

  border-radius: 4px;
  padding: 1rem 1.5rem;
  border-left: 3px solid #333;

  span {
    color: ${({ theme }) => theme.Background};
    font-size: 0.8rem;
  }

  p {
    color: #333;
  }
`;

const ReserveItem = (item, room) => {
  // 시작 위치
  const TIMELIST = [{startTime: "13:10", endTime: "15:30", userGroup: "경제학과", userName: "김현민", userRank: "1"},
    {startTime: "17:10", endTime: "18:30", userGroup: "경제학과", userName: "김현민", userRank: "1"},
    {startTime: "13:10", endTime: "15:30", userGroup: "경제학과", userName: "김현민", userRank: "1"},
    {startTime: "13:10", endTime: "15:30", userGroup: "경제학과", userName: "김현민", userRank: "1"},
  ]

  const top = TIMELIST.findIndex((time) => time.startTime === item.startTime);
  console.log(item.startTime)
  // 높이
  const [startHour, startMinute] = item.startTime.split(":").map(Number);
  const [endHour, endMinute] = item.endTime.split(":").map(Number);
  const diff = (endHour - startHour) * 2 + Number(startMinute !== endMinute);

  return (
    <TimeTableItem
      key={item.startTime}
      $room={room}
      $top={top}
      $space={diff}
      $color={GroupColor(item.userGroup)}
    >
      <span>
        {item.startTime} ~ {item.endTime}
      </span>
      <p>
        {item.userGroup} {item.userName} {item.userRank}
      </p>
    </TimeTableItem>
  );
};



export default function Table() {
  const TIMELIST = [{startTime: "13:10", endTime: "15:30", userGroup: "경제학과", userName: "김현민", userRank: "1"},
     {startTime: "17:10", endTime: "18:30", userGroup: "경제학과", userName: "김현민", userRank: "1"},
     {startTime: "13:10", endTime: "15:30", userGroup: "경제학과", userName: "김현민", userRank: "1"},
     {startTime: "13:10", endTime: "15:30", userGroup: "경제학과", userName: "김현민", userRank: "1"},
    ]
    console.log(TIMELIST.findIndex((time) => time === item.startTime))

  return (
    <Section>
      <MainStyled>
        <div className="top">
          <span>
            <h1>Home</h1>
            <NowDate></NowDate>
          </span>
          <Streak Layer='2'></Streak>
        </div>
        <div className="bottom">
          <div className="innerTop">
            <Button class="dropdown">
              태그
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </Button> 
            <Button class="dropdown">
              활동
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </Button> 
            <Button class="dropdown">
              날짜
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </Button> 
            <Button>편집</Button>
          </div>
          <div className="innerBottom">
            <TimeList>
              {/* {TIMELIST.map(time => (
                  <div>
                    
                    <hr />
                  </div>
              ))} */}
              <ReserveItem item={TIMELIST[0]} room={1}>{time}</ReserveItem>
            </TimeList>
          </div>
        </div>
      </MainStyled>
    </Section>
  )
}