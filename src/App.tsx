import { Navbar } from './components/Navbar'
import { PorgramsList } from './pages/ProgramsList'

export function App (): JSX.Element {
  return (
    <>
    <section className=" h-100px  lg:top-0 bg-white lg:h-[100px] w-full">
      <Navbar/>
    </section>

      <PorgramsList/>

    </>
  )
}
