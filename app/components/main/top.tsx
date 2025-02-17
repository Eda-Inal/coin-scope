import React from 'react'
import {FaRegStar,FaStar  } from "react-icons/fa";


const Top: React.FC = () => {

    return (
        <>

            <div className='flex flex-col gap-1   h-4/5 mt-2 w-full justify-between'>


                <div className="flex flex-row justify-between font-semibold text-sm">
                    <div className="flex-[0.5]   "></div>

                    <span className="flex-[0.5] text-left ">#</span>
                    <span className="flex-[1.2] text-left">Coin</span>
                    <span className="flex-[1.2] text-left">Price</span>
                    <span className="flex-[1.5] text-left">24s %</span>
                    <span className="flex-[2] text-left sm:block hidden">Market Volume</span>
                    <span className="flex-[2] text-left sm:block hidden">Market Cap</span>
                </div>


             
                {Array(5)
                    .fill(null)
                    .map((_, index) => (
                        <div key={index} className="flex flex-row justify-between items-center rounded-lg text-sm">
                            <div className="flex-[0.5] "> <FaRegStar className='cursor-pointer' size={16}/>

                            </div>

                            <span className="flex-[0.5] text-left">{index + 1}</span>
                            <span className="flex-[1.2] text-left">Coin</span>
                            <span className="flex-[1.2] text-left">Price: -</span>
                            <span className="flex-[1.5] text-left">24s %</span>
                            <span className="flex-[2] text-left sm:block hidden">Market Volume -</span>
                            <span className="flex-[2] text-left sm:block hidden ">Market Cap -</span>
                        </div>

                    ))}
            </div>






        </>

    )
}

export default Top
