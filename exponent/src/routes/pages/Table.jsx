import styled from "styled-components"
import { format } from "date-fns";
import Button from "../../components/button";

const Section = styled.section`
  width: 96%;
  height: 100vh;
  margin: 0 auto;
`

export default function Table() {
  const dateFns = new Date();

  return (
    <Section>
      <div>
        <p>Table</p>
        <p>{format(dateFns,'yyyy-MM-dd')}</p>
        <input type="text" />
      </div>
      <div className="streak">
        <div>
          <h1>Streak</h1>
        </div>
        <dl className="timeTable">
          <li>9월</li>
          <Button>편집</Button>
        </dl>
      </div>
    </Section>
  )
}