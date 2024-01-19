import { NavLink } from 'react-router-dom'
import { Divider, Header, MenuBar, Navigation, SettingOptions } from './styles'
import logo from '../../assets/Logo.svg'
import { ChartLineUp, SignOut, Table, UserCircle, X } from 'phosphor-react'
import { useContext } from 'react'
import { SideBarContext } from '../../contexts/SidebarContext'

export function SideBar() {
  const { toggle, HandleSetToggle } = useContext(SideBarContext)

  return (
    <MenuBar $toggle={toggle}>
      <Header>
        <img src={logo} alt="" width={127} height={38} />
        <button onClick={HandleSetToggle}>
          <X size={24} />
        </button>
      </Header>

      <Navigation>
        <ul>
          <div>
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
          </div>

          <SettingOptions>
            <Divider />
            <li>
              <a>
                <UserCircle size={32} />
                Conta
              </a>
            </li>
            <li>
              <a>
                <SignOut size={32} />
                Sair
              </a>
            </li>
          </SettingOptions>
        </ul>
      </Navigation>
    </MenuBar>
  )
}
