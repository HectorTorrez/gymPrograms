import { cutText } from '../utilities/cutText'
import { formatCurrency } from '../utilities/formatCurrency'
import { Link } from 'react-router-dom'

interface ProgramCardProps {
  item: {
    id: string
    title: string
    price: number
    description: string
  }
}

export function ProgramCard ({ item }: ProgramCardProps): JSX.Element {
  const { title, price, description, id } = item
  return (
    <section className='bg-lightest flex flex-col md:flex-row items-center w-full px-3 lg:block lg:p-0 rounded-lg'>
        <Link to={`/programDescription/${id}`} className="flex items-center  w-full   lg:h-full lg:max-h-[300px] lg:items-start bg-lightest rounded-lg h-[125px]">
            <section className="lg:mt-9 flex lg:flex-col lg:gap-3   w-full justify-between">
                <section className="flex   gap-2 lg:flex-col lg:mx-9  ">
                    <div className=" lg:flex-col lg:items-center w-[100px] h-[72px] lg:h-[200px] lg:w-full bg-gray-800 rounded-lg ">
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className=' overflow-hidden max-h-[50px] w-full'>
                        <h3 className="text-black font-medium">{title}</h3>
                        <p>{cutText(description)}</p>
                    </div>
                </section>
            </section>
        </Link>
        <section className="flex flex-col w-full  lg:flex lg:flex-col-reverse lg:gap-3 lg:pl-9 lg:my-9 mb-5 md:w-fit lg:w-full">
                    <button className="flex justify-center items-center md:p-[5px] lg:p-[10px] w-[97px] lg:w-[50%] rounded-lg  bg-primary outline-none active:opacity-90 text-lightest">BUY</button>
                    <p className="text-black font-bold text-xl lg:text-3xl">{formatCurrency(price)}</p>
        </section>
    </section>
  )
}
