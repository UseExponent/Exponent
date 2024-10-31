import { NavLink } from 'react-router-dom'
import styles from '../assets/Footermenu.module.css'
import styled from "styled-components";

const FooterMenu = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  nav{
    position: relative;
    min-height: 3rem;
    padding: .5rem 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 1rem;
    a{
      display: flex;
      max-width: 50px;
      max-height: 50px;
      width: 100%;
      height: 100%;
      border: 1px solid #f1f1f1dd;
      box-shadow: 1px 1px 3px #cecece, -1px -1px 3p  #fff;
      border-radius: 10px;

      justify-content: center;
      align-items: center;
      color: #333;
      transition: all .25s;
    }
  }
`

const navigations = [
  { to: '/Main', label: '홈' },
  { to: '/Table', label: '테이블' },
  { to: '/Object', label: '목적' },
  { to: '/Search', label: '검색' },
  { to: '/User', label: '사용자' },
]

export default function Footermenu() {
    return (
      <FooterMenu>
        <nav className={styles.nav}>
          {navigations.map(nav => (
            <NavLink
              key={nav.to}
              to={nav.to}
              className={({ isActive }) => (isActive ? styles.active : '')}>
              {nav.label}
            </NavLink>
          ))}
        </nav>
      </FooterMenu>
    )
  }

  // history.replaceState 같이 탐색 히스토리를 변경하지 않고 현재 항목을 대체하려면 replace 속성을 사용할 수 있습니다.
  // 이는 로그인 페이지와 같이 사용자가 뒤로 가기를 눌렀을 때 이전 페이지로 돌아가지 않아야 하는 경우에 유용합니다.