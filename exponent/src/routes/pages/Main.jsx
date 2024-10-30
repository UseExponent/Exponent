import styled from "styled-components"
import { format } from "date-fns";

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
      </div>
      <div>
        <div className="1"></div>
        <div className="1"></div>
        <div className="1"></div>
        <div className="1"></div>
      </div>
    </Section>
  )
}