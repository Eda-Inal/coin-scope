import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { toggleFavorite } from '@/app/features/coinSlice';
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
const Coins: React.FC = () => {
    const dispatch = useDispatch();
    const allCoins = useSelector((state: RootState) => state.coin.allCoins);
    return (
        <div className='flex flex-col gap-2 h-full w-full mt-2 justify-between  '>


            <div className="flex flex-row justify-between font-semibold p-2 border-b dark:border-b-gray-700">
                <div className="flex-[0.3]">⭐</div>
                <span className="flex-[0.3] text-left">#</span>
                <span className="w-8 h-8 rounded-full mr-4 text-left"></span>
                <span className="flex-[1.2] text-left sm:block hidden">Coin</span>
                <span className="flex-[1.2] text-left">Price</span>
                <span className="flex-[1.2] text-left">24h %</span>
                <span className="flex-[2] text-left md:block hidden">Market Cap</span>
                <span className="flex-[2] text-left lg:block hidden">Market Volume</span>
                
                <span className="flex-[2] text-left lg:block hidden">Circulating Supply</span>
                <span className="flex-[1] text-left lg:block hidden">ATL</span>
                <span className="flex-[1] text-left lg:block hidden">ATH</span>
                <span className="flex-[2] text-left sm:block hidden">Chart (7 days) </span>
            </div>


            {allCoins.map((coin, index) => {
                const isPositive = coin.change >= 0;
                return (
                    <div
                        key={index}
                        className="flex flex-row justify-between items-center rounded-full text-sm py-3 bg-lightSecondary dark:bg-darkSecondary px-2 mt-1 "
                    >
                        <div className="flex-[0.3]  text-lg">
                            {coin.favorite ? <FaStar onClick={() => dispatch(toggleFavorite(coin.symbol))} className='text-yellow-500 cursor-pointer' /> : <FaRegStar className='cursor-pointer' onClick={() => dispatch(toggleFavorite(coin.symbol))} />}
                        </div>
                        <span className="flex-[0.3] text-left">{index + 1}</span>
                        <span className="w-8 h-8  rounded-full mr-4 bg-pink-500 text-left"></span>
                        <span className="flex-[1.2] text-left  sm:block hidden">{coin.name}</span>
                        <span className="flex-[1.2] text-left">{coin.price.toLocaleString()}</span>
                        <span className={`flex-[1.2] flex items-center gap-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            {isPositive ? <FiArrowUp className="text-green-500" /> : <FiArrowDown className="text-red-500" />}
                            {coin.change}%
                        </span>
                        <span className="flex-[2] text-left md:block hidden">{coin.marketCap.toLocaleString()}</span>
                        <span className="flex-[2] text-left lg:block hidden">{coin.marketVolume.toLocaleString()}</span>
                        <span className="flex-[2] text-left lg:block hidden">{coin.circulatingSupply.toLocaleString()}</span>
                        <span className="flex-[1] text-left lg:block hidden">${coin.atl.toLocaleString()}</span>
                        <span className="flex-[1] text-left lg:block hidden">${coin.ath.toLocaleString()}</span>


                        <div className="flex-[2] text-left sm:block hidden">
                            <div className="h-8 w-full  rounded-md"></div>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
}

export default Coins;
