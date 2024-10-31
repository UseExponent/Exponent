import styled from "styled-components"
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
        <Link to="/User/Option" className="Option"></Link>
        <Link to="/User/Edit" className="Edit"></Link>
      </div>
      <div>
        <div>
          <Link to="/User/Follower" className="Follower"><img src="Profile" alt="Profile" /></Link>
          <p>hnnnnnmin</p>
          <p>정신상태불량</p>
        </div>
        <div>
          <span>프로필 편집</span>
          <span>프로필 공유</span>
        </div>
      </div>
      <dl>
        <li><Link to="/User/Follower" className="Follower">팔로워</Link></li>
        <li><Link to="/User/Following" className="Following">팔로잉</Link></li>
        <li><Link to="/User/reward" className="reward">리워드</Link></li>
      </dl>
      <ol>
        <li>History</li>
        <li>Shared</li>
        <li>Organization</li>
      </ol>

    </Section>
  )
}