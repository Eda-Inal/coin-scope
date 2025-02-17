import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { Coin, toggleFavorite } from '@/app/features/coinSlice';


const Top: React.FC = () => {
    const dispatch = useDispatch();
    const allCoins = useSelector((state: any) => state.coin.allCoins);



    const sortedCoins = [...allCoins].sort((a: Coin, b: Coin) => b.marketCap - a.marketCap);
    const top5Coins = sortedCoins.slice(0, 5);
    return (
        <>

            <div className='flex flex-col gap-1   h-[205px] py-2  w-full justify-between'>
                <div className="flex flex-row justify-between font-semibold text-sm">
                    <div className="flex-[0.5]   "></div>

                    <span className="flex-[0.5] text-left ">#</span>
                    <span className="flex-[1.2] text-left">Coin</span>
                    <span className="flex-[1.2] text-left">Price</span>
                    <span className="flex-[1.5] text-left">24s %</span>
                    <span className="flex-[2] text-left sm:block hidden">Market Volume</span>
                    <span className="flex-[2] text-left sm:block hidden">Market Cap</span>
                </div>



                {top5Coins.map((coin, index) => (
                    <div key={index} className="flex flex-row justify-between items-center rounded-lg text-sm  dark:bg-darkSecondary bg-lightSecondary p-1">
                        <div className="flex-[0.5]">  {coin.favorite ? <FaStar onClick={() => dispatch(toggleFavorite(coin.symbol))} className='text-yellow-500 cursor-pointer' /> : <FaRegStar className='cursor-pointer' onClick={() => dispatch(toggleFavorite(coin.symbol))} />}

                        </div>

                        <span className="flex-[0.5] text-left">{index + 1}</span>
                        <span className="flex-[1.2] text-left">{coin.name}</span>
                        <span className="flex-[1.2] text-left">{coin.price}</span>
                        <span className="flex-[1.5] text-left">{coin.change}%</span>
                        <span className="flex-[2] text-left sm:block hidden">{coin.marketVolume}</span>
                        <span className="flex-[2] text-left sm:block hidden ">{coin.marketCap}</span>
                    </div>

                ))}
            </div>






        </>

    )
}

export default Top
