import styled from "styled-components"
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Section = styled.section`
  width: 96%;
  height: 100vh;
  margin: 0 auto;
`

export default function User() {

  return (
    <Section>
      <div>
        <p>Explore</p>
        <input type="text" />
      </div>
      <Link to="/Search/Discovery" className="Discovery">
        <dl>
          <li>50살에 부자 해보기</li>
          <li>꿈 이뤄보기</li>
        </dl>
      </Link>
      <dl>
        <li>꿈을 위해 다가가기</li>
        <li>부자를 위해 돈 모으기</li>
        <Button>편집</Button>
      </dl>
    </Section>
  )
}