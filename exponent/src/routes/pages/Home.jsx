import styled from "styled-components"
import Logo from "../../assets/img/logo.png"
import Button from "../../components/button"
import Section from "../../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from '@fortawesome/free-solid-svg-icons'


const MainStyled = styled.div`
  .top{
    a{
      position: relative;
      display: grid;
      place-items: center;
      img{
        width: 100%;
      }
    }
    span{
        width: 100%;
        text-align: center;
        display: inline-block;
        font-weight: bold;
        margin: 1rem 0;
        color: ${({ theme }) => theme.darkBlue};
        font-size: ${({ theme }) => theme.sm};
    }
    div{
      background-color: ${({ theme }) => theme.Background};
      border-radius: 8px;
      border: none;
      outline: none;
      cursor: pointer;
      box-shadow:
      6px 6px 6px rgba(0,0,0,0.05),
      -6px -6px 6px rgba(255,255,255,0.6),
      inset 2px 2px 5px rgba(0,0,0,0.03),
      inset -2px -2px 5px rgba(255,255,255,0.4);
      transition: all 0.3s;
      ol{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 8px;
            li{
                a{
                    svg{
                        font-size: ${({ theme }) => theme.lg};
                        color: ${({ theme }) => theme.lightGreen};
                    }
                }
            }
        }
    }
  }
  .bottom{
    width: 100%;
    /* height: calc(99vh - 5rem - 10rem); */
    margin-top: 1rem;
    gap: .5rem;
    div{
      display: grid;
      place-items: center;
      background-color: ${({ theme }) => theme.Background};
      color: ${({ theme }) => theme.darkBlue};
      border-radius: 8px;
      border: none;
      outline: none;
      cursor: pointer;
      font-weight: bold;
      box-shadow:
      6px 6px 6px rgba(0,0,0,0.05),
      -6px -6px 6px rgba(255,255,255,0.6),
      inset 2px 2px 5px rgba(0,0,0,0.03),
      inset -2px -2px 5px rgba(255,255,255,0.4);
      transition: all 0.3s;
    }
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: .8rem 0;
        background-color: ${({ theme }) => theme.Background};
        color: ${({ theme }) => theme.darkBlue};
        border-radius: 8px;
        border: none;
        outline: none;
        cursor: pointer;
        font-weight: bold;
        box-shadow:
        6px 6px 6px rgba(0,0,0,0.05),
        -6px -6px 6px rgba(255,255,255,0.6),
        inset 2px 2px 5px rgba(0,0,0,0.03),
        inset -2px -2px 5px rgba(255,255,255,0.4);
        transition: all 0.3s;
        input{
            all: unset;
            width: 88%;
            margin-bottom: 0.6rem;
            padding: .5rem 1rem;
            background-color: ${({ theme }) => theme.lightGreen};
            color: ${({ theme }) => theme.darkBlue};
            border-radius: 8px;
            border: none;
            outline: none;
            cursor: pointer;
            font-weight: bold;
            box-shadow:
            6px 6px 6px rgba(0,0,0,0.05),
            -6px -6px 6px rgba(255,255,255,0.6),
            inset 2px 2px 5px rgba(0,0,0,0.03),
            inset -2px -2px 5px rgba(255,255,255,0.4);
            transition: all 0.3s;
        }
    }
    .line{
        position: relative;
        width: 100%;
        height: fit-content;
        text-align: center;
        margin: 2rem 0;
        color: ${({ theme }) => theme.darkBlue};
        font-size: ${({ theme }) => theme.md};
        font-weight: bold;
        &::after{
            content: '';
            position: absolute;
            left: 2%;
            top: 50%;
            width: 40%;
            height: 1px;
            border-radius: 100px;
            transform: translateY(-50%);
            background-color: ${({ theme }) => theme.darkBlue};
        }
        &::before{
            content: '';
            position: absolute;
            right: 2%;
            top: 50%;
            width: 40%;
            height: 1px;
            border-radius: 100px;
            transform: translateY(-50%);
            background-color: ${({ theme }) => theme.darkBlue};
        }
    }
    .menu{
        padding: .8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: fit-content;
        text-align: center;
        margin: 2rem 0;
        color: ${({ theme }) => theme.darkBlue};
        font-size: ${({ theme }) => theme.md};
        font-weight: bold;
        label{
            margin-right: 4rem;
        }
        a{
            color: ${({ theme }) => theme.darkBlue};
            font-size: ${({ theme }) => theme.sm};
            margin-left: 1rem;
        }
    }
  }
`

export default function Home() {
    return (
        <Section>
            <MainStyled>
                <div className="top">
                    <a>
                        <img src={Logo} alt="Logo" />
                    </a>
                    <span>하나의 아이디로 Exponent를 이용하세요</span>
                    <div>
                        <ol>
                            <li><a><FontAwesomeIcon icon={faSignature} /></a></li>
                            <li><a><FontAwesomeIcon icon={faSignature} /></a></li>
                            <li><a><FontAwesomeIcon icon={faSignature} /></a></li>
                            <li><a><FontAwesomeIcon icon={faSignature} /></a></li>
                            <li><a><FontAwesomeIcon icon={faSignature} /></a></li>
                        </ol>
                    </div>
                </div>
                <div className="bottom">
                    <p className="line">
                        또는
                    </p>
                    <form>
                        <input placeholder="아이디" type="text" />
                        <input placeholder="비밀번호" type="password" />
                        <Button>로그인</Button>
                    </form>
                    <div className="menu">
                        <input type="checkbox" id="login"/>
                        <label for="login">로그인 상태 유지</label> 
                        {/* URL - KeepLogin=false or true*/}
                        <a href="#">비밀번호 재설정</a>
                        <a href="#">회원가입</a>
                    </div>
                    {/* <form>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </form>
                    <Button>회원가입</Button>
                    <a href="#">이미 계정이 있으세요? <p>로그인</p></a> */}
                </div>
            </MainStyled>
        </Section>
    )
}