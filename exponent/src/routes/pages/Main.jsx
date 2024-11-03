import styled from "styled-components"
import { format } from "date-fns";
import Streak from "../../components/Streak";

const Section = styled.section`
  width: 96%;
  height: 100vh;
  margin: 0 auto;
`

export default function Main() {
  const dateFns = new Date();

  return (
    <Section>
      <div>
        <p>Home</p>
        <p>{format(dateFns,'yyyy-MM-dd')}</p>
        <Streak Layer='2'></Streak>
      </div>
      <div>
        <div className="TimeTalble">TimeTalble</div>
        <div className="Time/Score">Time/Score</div>
        <div className="Diary">Diary</div>
        <div className="Todo">Todo</div>
      </div>
    </Section>
  )
}