import { ProgramCard } from './ProgramCard'

export function PorgramsList (): JSX.Element {
  return (
    <article className="min-h-[calc(100vh-110px)]  min-w-[320px] p-4 gap-4 flex flex-col lg:grid lg:grid-cols-2 lg:items-start lg:justify-center items-center  flex-shrink-0 rounded-lg bg-gray-200 ">
        <ProgramCard/>
        <ProgramCard/>
        {/* <ProgramCard/>
        <ProgramCard/>
        <ProgramCard/>
        <ProgramCard/>
        <ProgramCard/>
        <ProgramCard/> */}

    </article>
  )
}
