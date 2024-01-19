import { Outlet } from 'react-router-dom'
import { SideBar } from '../../components/SideBar'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <SideBar />
      <Outlet />
    </LayoutContainer>
  )
}
