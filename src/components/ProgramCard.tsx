export function ProgramCard (): JSX.Element {
  return (
        <article className="flex items-center   lg:h-full lg:max-h-[400px] lg:items-start     w-full    bg-lightest rounded-lg h-[125px]">
            <section className="m-3 flex lg:flex-col lg:gap-10 lg:m-8 w-full justify-between">
                <section className="flex  gap-2  ">
                    <div className="w-[76px] h-[72px] lg:h-[200px] lg:w-[50%]  bg-gray-800 rounded-lg ">
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className=" h-[76px]">
                        <h3 className="text-black font-semibold">Bodybuilding program</h3>
                    </div>
                </section>
                <section className=" h-[76px] lg:flex lg:flex-col ">
                    <button className="flex justify-center items-center p-[10px] w-[97px] lg:w-[50%] rounded-lg  bg-primary outline-none active:opacity-90 text-lightest">BUY</button>
                    <p className="text-black font-bold text-3xl">$20.00</p>
                </section>
            </section>
        </article>
  )
}
