import styled from "styled-components"
import { Link } from "react-router-dom";
import Button from "../../../components/button";

const Section = styled.section`
  width: 96%;
  height: 100vh;
  margin: 0 auto;
`

export default function Follower() {

  return (
    <Section>
      <div>
        <Link to="/User" className="Back">뒤로</Link>
      </div>
      <div>
        <p>팔로잉</p>
        <input type="text" />
      </div>
      <div>
        <div>
            <Link to="/User/Follower" className="Follower"><img src="Profile" alt="Profile" /></Link>
            <p>hnnnnnmin</p>
            <Button>머시</Button>
        </div> 
        <ol>
            <li>
                <Link to="#" className="Follower">
                    <img src="Profile" alt="Profile" />
                    <p>누군구</p>
                    <p>papadogg_a</p>
                    <Button>팔로잉</Button>
                </Link>
            </li>
            <li>
                <Link to="#" className="Follower">
                    <img src="Profile" alt="Profile" />
                    <p>흡연자</p>
                    <p>cigaret_good</p>
                    <Button>팔로우</Button>
                </Link>
            </li>
            <Button>맨위</Button>
        </ol>
      </div> 
    </Section>
  )
}