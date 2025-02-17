import React from 'react';
import { FaStar,FaRegStar  } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { toggleFavorite } from '@/app/features/coinSlice';
const Coins: React.FC = () => {
    const dispatch = useDispatch();
    const allCoins = useSelector((state: RootState) => state.coin.allCoins);
    return (
        <div className='flex flex-col gap-2 h-full w-full mt-2 justify-between  '>


            <div className="flex flex-row justify-between font-semibold p-2 border-b dark:border-b-gray-700">
                <div className="flex-[0.5]">⭐</div>
                <span className="flex-[0.5] text-left">#</span>
                <span className="flex-[1.2] text-left">Coin</span>
                <span className="flex-[1.2] text-left">Price</span>
                <span className="flex-[1.5] text-left">24h %</span>
                <span className="flex-[2] text-left md:block hidden">Market Volume</span>
                <span className="flex-[2] text-left md:block hidden">Market Cap</span>
                <span className="flex-[2] text-left md:block hidden">Circulating Supply</span>
                <span className="flex-[1] text-left md:block hidden">ATL</span>
                <span className="flex-[1] text-left md:block hidden">ATH</span>
                <span className="flex-[2] text-left sm:block hidden">Chart (7 days) </span>
            </div>


            {allCoins.map((coin, index) => (
                    <div
                        key={index}
                        className="flex flex-row justify-between items-center rounded-full text-sm py-3 bg-lightSecondary dark:bg-darkSecondary px-2 mt-1 "
                    >
                        <div  onClick={() => dispatch(toggleFavorite(coin.symbol))} className="flex-[0.5] cursor-pointer text-lg">
                        {coin.favorite ? <FaStar className='text-yellow-500' /> : <FaRegStar /> }
                          </div>
                        <span className="flex-[0.5] text-left">{index + 1}</span>
                        <span className="flex-[1.2] text-left">{coin.name}</span>
                        <span className="flex-[1.2] text-left">{coin.price.toLocaleString()}</span>
                        <span className="flex-[1.5] text-left">{coin.change}%</span>
                        <span className="flex-[2] text-left md:block hidden">{coin.marketVolume.toLocaleString()}</span>
                        <span className="flex-[2] text-left md:block hidden">{coin.marketCap.toLocaleString()}</span>
                        <span className="flex-[2] text-left md:block hidden">{coin.circulatingSupply.toLocaleString()}</span>
                        <span className="flex-[1] text-left md:block hidden">${coin.atl.toLocaleString()}</span>
                        <span className="flex-[1] text-left md:block hidden">${coin.ath.toLocaleString()}</span>


                        <div className="flex-[2] text-left sm:block hidden">
                            <div className="h-8 w-full  rounded-md"></div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Coins;
