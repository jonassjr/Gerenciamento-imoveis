import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Management } from './pages/Management'
import { Dashboard } from './pages/Dashboard'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Management />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
