'use client'
import React from 'react';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";



const favoriteCoins = [
    { name: "Bitcoin", symbol: "BTC", price: 45000, change: 2.5 },
    { name: "Ethereum", symbol: "ETH", price: 3200, change: -1.2 },
    { name: "Solana", symbol: "SOL", price: 120, change: 5.3 },
    { name: "Cardano", symbol: "ADA", price: 1.2, change: -0.5 },
];

const Favourites: React.FC = () => {
    return (
        <div className="h-4/5 flex flex-col mt-1  ">



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm w-full  mx-auto ">
                {favoriteCoins.map((coin, index) => (
                    <div key={index} className="flex justify-between p-2  rounded-lg shadow-md w-full h-[85px] dark:bg-darkBackground bg-lightBackground gap-3">

                        <div className='flex flex-col w-1/2 h-full justify-between'>
                            <div className='flex flex-row items-center gap-1'>
                                <div className="w-6 h-6 bg-red-200 rounded-full"></div> {/* Coin logosu için yer */}
                                <div className="font-semibold ">{coin.name}</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className=" font-bold text-xs">${coin.price.toLocaleString()}</span>
                                <span className={`text-xs font-medium ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {coin.change}%
                                </span>
                            </div>


                        </div>
                        <div className='h-full w-1/2 b'>


                        </div>








                    </div>
                ))}
            </div>
            <div className='flex w-full justify-between mt-1'>
                <span className='cursor-pointer hover:text-primary'><MdKeyboardDoubleArrowLeft size={20} /></span>
                <span className='cursor-pointer hover:text-primary'><MdKeyboardDoubleArrowRight size={20} /></span>
            </div>
        </div>
    );
}

export default Favourites;

