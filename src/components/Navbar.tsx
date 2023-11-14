import { Link } from 'react-router-dom'
import { Home, Profile } from './Icons'

export function Navbar (): JSX.Element {
  return (
      <nav>
        <ul className="flex justify-between m-auto w-[80%] max-w-6xl py-5">
          <Link className="flex flex-col items-center font-semibold" to='/'>
            <p><Home/></p>
            HOME
          </Link>
          <li className="flex flex-col items-center font-semibold">
            <p><Profile/></p>
            PROFILE
          </li>
        </ul>
      </nav>
  )
}
