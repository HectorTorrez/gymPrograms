import { cn } from '../utilities/cn'
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
  xl?: boolean
}

export function ProgramCard ({ item, xl }: ProgramCardProps): JSX.Element {
  const { title, price, description, id } = item
  return (
    <section className={cn('bg-lightest flex flex-col md:flex-row items-center w-full px-3 lg:block lg:p-0 rounded-lg border border-light shadow-inner ',
      {
        'flex flex-col h-[calc(100vh-110px)] bg-lightest md:flex-col max-w-xl m-auto border border-light shadow-inner  ': xl
      })
    }>
        <Link to={`/programDescription/${id}`} className={cn('flex items-center  w-full   lg:h-full lg:max-h-[300px] lg:items-start bg-lightest rounded-lg h-[125px]',
          {
            ' flex-col h-[85%] bg-lightest lg:max-h-[85%]': xl
          })
          }>
            <section className={cn('lg:mt-8 flex lg:flex-col lg:gap-3   w-full justify-between',

              {
                'h-full justify-center lg:mt-0 lg:py-10 lg:px-10 ': xl
              })
              }>
                <section className={cn('flex   gap-2 lg:flex-col lg:mx-8',
                  {
                    'flex flex-col items-center h-full lg:mx-3': xl
                  })
                  }>
                    <div className={cn('lg:flex-col lg:items-center w-[100px] h-[72px] lg:h-[200px] lg:w-full bg-gray-800 rounded-lg',
                      {
                        'h-[30%] w-full ': xl
                      })
                      }>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className={cn('overflow-hidden max-h-[50px] w-full',
                      {
                        'max-h-none': xl
                      })
                    }>
                        <h3 className={cn('text-black font-medium',
                          {
                            'text-2xl mb-3 font-bold': xl
                          }
                        )}>{title}</h3>
                        <p>{cutText(description)}</p>
                        {
                          (xl ?? false) && <p>{description}</p>
                        }
                    </div>
                </section>
            </section>
        </Link>
        <section className={cn('flex flex-col w-full  lg:flex lg:flex-col-reverse lg:gap-3 lg:pl-8 lg:my-8 mb-5 md:w-fit lg:w-full',
          {
            'h-[15%]  flex-col-reverse md:w-full mb-3 lg:pl-0 lg:my-0 lg:px-10 lg:pb-10 bg-lightest ': xl
          })
            }>
                <button className={cn('flex justify-center items-center md:p-[5px] lg:p-[10px] w-[97px] lg:w-[50%] rounded-lg  bg-primary outline-none active:opacity-90 text-lightest hover:opacity-80',
                  {
                    'h-[50px] w-full mt-4 ': xl
                  }

                )}>BUY</button>
                <p className={cn('text-black font-bold text-xl lg:text-3xl',
                  {
                    'text-3xl': xl
                  }
                )}>{formatCurrency(price)}</p>
        </section>
    </section>
  )
}
