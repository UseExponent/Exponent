import styled from "styled-components"
import Button from "../../../components/button";

const Section = styled.section`
  width: 96%;
  height: 100vh;
  margin: 0 auto;
`

export default function Discovery() {

  return (
    <Section>
      <div>
        <p>Discovery</p>
        <input type="text" />
      </div>
      <div>
        <li>목표를 향해 정진</li>
        <Button>+</Button>
      </div>
    </Section>
  )
}