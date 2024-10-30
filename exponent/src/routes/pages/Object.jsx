import styled from "styled-components"
import Button from "../../components/button";
import { Link } from "react-router-dom";

const Section = styled.section`
  width: 96%;
  height: 100vh;
  margin: 0 auto;
`

export default function Object() {

  return (
    <Section>
      <div>
        <p>Purpose</p>
        <input type="text" />
      </div>
      <Link to="/Object/LongObject" className="Long">
        <a>
          <dl>
            <li>50살에 부자되기</li>
            <li>여자친구 사귀기</li>
          </dl>
        </a>
      </Link>
      <dl>
        <li>이거 따기</li>
        <li>저거 먹어보기</li>
        <Button>편집</Button>
      </dl>
    </Section>
  )
}