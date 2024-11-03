import styled from "styled-components";
import Streak from "../../components/Streak";
import Section from "../../components/Section";
import NowDate from "../../components/NowDate";

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
    grid-template-rows: 40% 60%;
    margin-top: 1rem;
  }
`

export default function Main() {
  /**
   * 일회성 예시 ))) 컴포넌트 구조 작성규칙
   * @param {.top, .bottom} ClassName
   * @param {Layer = 1 || 2 || 3 || 4 else = 1} LayerValue
   * @param {.top in span > h1 사용 (권장)} .top Format 
   * @returns {MainScreen} 
   */
  return (
    <Section>
      <MainStyled>
        <div className="top">
          <span>
            <h1>Home</h1>
            <NowDate></NowDate>
          </span>
          <Streak Layer='2'>asd</Streak>
        </div>
        <div className="bottom">
          {/* 각각의 모듈화 */}
          <div className="TimeTalble">TimeTalble</div>
          <div className="Time/Score">Time/Score</div>
          <div className="Diary">Diary</div>
          <div className="Todo">Todo</div>
        </div>
      </MainStyled>
    </Section>
  )
}