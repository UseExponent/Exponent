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


export default function Table() {
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

          </div>
        </div>
      </MainStyled>
    </Section>
  )
}