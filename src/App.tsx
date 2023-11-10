import { Navbar } from './components/Navbar'
import { PorgramsList } from './components/ProgramsList'

export function App (): JSX.Element {
  return (
    <>
    <section className=" h-100px  lg:top-0 bg-white lg:h-[100px] w-full">
      <Navbar/>
    </section>
    <section className='mx-5 '>
      <PorgramsList/>
    </section>
    </>
  )
}
