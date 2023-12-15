import { NavLink } from 'react-router-dom'

export function SideBar() {
  return (
    <aside>
      <img src="" alt="" />
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Gerenciamento</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard'}>Dashboad</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
