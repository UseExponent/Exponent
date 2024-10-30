import styled from "styled-components"
import Logo from "../../assets/img/logo.png"
import Button from "../../components/button"

const Main = styled.section`
    width: 80%;
    height: 100vh;
    margin: 0 auto;
`
const Login = styled.div`
    
`
const Register = styled.div`
    display: none;
`

export default function Home() {
    
    return (
        <Main>
            <Login>
                {/* 레이아웃 처리 */}
                <a>
                    <img src={Logo} alt="Logo" />
                </a>
                <div>
                    <p>다른 서비스로 로그인</p>
                    <ol>
                        <li><a>SMS</a></li>
                        <li><a>SMS</a></li>
                        <li><a>SMS</a></li>
                        <li><a>SMS</a></li>
                        <li><a>SMS</a></li>
                    </ol>
                </div>
                {/* 레이아웃 처리 */}
                <form>
                    <input type="text" />
                    <input type="text" />
                </form>
                <Button>로그인</Button>
                <div className="menu">
                    <input type="checkbox" id="login"/>
                    <label id="login">로그인 상태 유지</label> 
                    {/* URL - KeepLogin=false or true*/}
                    <a href="#">비밀번호 재설정</a>
                    <a href="#">회원가입</a>
                </div>
            </Login>
            
            <Register>
                <form>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
                <Button>회원가입</Button>
                <a href="#">이미 계정이 있으세요? <p>로그인</p></a>
            </Register>
        </Main>
    )
}