import { NavLink } from 'react-router-dom'
import styles from './Footermenu.module.css'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' }
]

export default function Footermenu() {
    return (
      <footer>
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
      </footer>
    )
  }

  // history.replaceState 같이 탐색 히스토리를 변경하지 않고 현재 항목을 대체하려면 replace 속성을 사용할 수 있습니다.
  // 이는 로그인 페이지와 같이 사용자가 뒤로 가기를 눌렀을 때 이전 페이지로 돌아가지 않아야 하는 경우에 유용합니다.