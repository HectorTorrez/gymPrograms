import { useParams } from 'react-router-dom'
import { Navbar } from './Navbar'
import { programs } from '../data/data'
import { ProgramCard } from './ProgramCard'

export function ProgramDescription (): JSX.Element {
  const { id } = useParams<{ id: string }>()
  console.log(id)

  const filter = programs.filter(item => item.id === id)

  return (
    <div>
        <Navbar/>
        {
            filter.map(item => {
              return <ProgramCard key={item.id} item={item}/>
            })
        }
    </div>
  )
}
