import { Home, Profile } from './Icons'

export function Navbar (): JSX.Element {
  return (
      <nav>
        <ul className="flex justify-between m-auto w-[80%] py-5">
          <li className="flex flex-col items-center font-semibold">
            <p><Home/></p>
            HOME
          </li>
          <li className="flex flex-col items-center font-semibold">
            <p><Profile/></p>
            PROFILE
          </li>
        </ul>
      </nav>
  )
}
