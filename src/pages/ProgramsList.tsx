import { ProgramCard } from '../components/ProgramCard'
import { programs } from '../data/data'

export function PorgramsList (): JSX.Element {
  return (
    <article className="min-h-[calc(100vh-110px)] w-[80%] m-auto max-w-6xl   min-w-[320px]  gap-4 flex flex-col lg:grid lg:grid-cols-3  lg: lg:m-auto  lg:items-start items-center   rounded-lg bg-lightest ">
      {
        programs.map(item => {
          return <ProgramCard key={item.id} item={item}/>
        })
      }

    </article>
  )
}
