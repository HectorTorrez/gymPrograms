import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { ProgramDescription } from '../components/ProgramDescription'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/programDescription/:id',
    element: <ProgramDescription/>
  }
])
