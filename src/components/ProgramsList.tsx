import { ProgramCard } from './ProgramCard'
import { programs } from '../data/data'

export function PorgramsList (): JSX.Element {
  return (
    <article className="min-h-[calc(100vh-110px)] max-w-6xl   min-w-[320px] p-4 gap-4 flex flex-col lg:grid lg:grid-cols-3  lg: lg:m-auto  lg:items-start items-center   rounded-lg bg-gray-200 ">
      {
        programs.map(item => {
          return <ProgramCard key={item.id} item={item}/>
        })
      }

    </article>
  )
}
