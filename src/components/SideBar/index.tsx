import { NavLink } from 'react-router-dom'
import { Divider, MenuBar, Navigation } from './styles'
import logo from '../../assets/Logo.svg'
import { ChartLineUp, SignOut, Table, UserCircle } from 'phosphor-react'

export function SideBar() {
  return (
    <MenuBar>
      <img src={logo} alt="" width={127} height={38} />
      <Navigation>
        <ul>
          <li>
            <NavLink to={'/'}>
              <Table size={32} />
              Gerenciamento
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard'}>
              <ChartLineUp size={32} />
              Dashboad
            </NavLink>
          </li>
          <Divider />
          <li>
            <NavLink to={'/conta'}>
              <UserCircle size={32} />
              Conta
            </NavLink>
          </li>
          <li>
            <NavLink to={'/sair'}>
              <SignOut size={32} />
              Sair
            </NavLink>
          </li>
        </ul>
      </Navigation>
    </MenuBar>
  )
}
