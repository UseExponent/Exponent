import styled from "styled-components"
import Button from "../../../components/button";

const Section = styled.section`
  width: 96%;
  height: 100vh;
  margin: 0 auto;
`

export default function LongObject() {

  return (
    <Section>
      <div>
        <p>장기목적</p>
        <input type="text" />
      </div>
      <div>
        <li>넌 진짜 지리는 사람이야</li>
        <Button>+</Button>
      </div>
    </Section>
  )
}