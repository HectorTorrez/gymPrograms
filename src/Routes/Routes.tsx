import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { ProgramDescription } from '../pages/ProgramDescription'
import { Auth } from '../pages/Auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/programDescription/:id',
    element: <ProgramDescription/>
  },
  {
    path: 'auth',
    element: <Auth/>
  }
])
