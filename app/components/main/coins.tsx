import React,{useEffect} from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { toggleFavorite,setRandomPrices } from '@/app/features/coinSlice';
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { getTranslation } from '@/app/utils/getTranslation'

const Coins: React.FC = () => {
    const dispatch = useDispatch();
    const allCoins = useSelector((state: RootState) => state.coin.allCoins);
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    useEffect(() => {
        dispatch(setRandomPrices()); 
    }, [dispatch]);
    return (
        <>
            <div className='flex flex-col gap-2 h-full w-full mt-2 justify-between  '>


                <div className="flex flex-row justify-between font-semibold p-2 border-b dark:border-b-gray-700">
                    <div className="flex-[0.3]">⭐</div>
                    <span className="flex-[0.3] text-left">#</span>
                    <span className="w-8 h-8 rounded-full mr-4  sm:block hiddentext-left"></span>
                    <span className="flex-[1.2] text-left ">{t.coin}</span>
                    <span className="flex-[1.2] text-left">{t.price}</span>
                    <span className="flex-[1.2] text-left">{t.coin24}%</span>
                    <span className="flex-[2] text-left md:block hidden">{t.marketCap}</span>
                    <span className="flex-[2] text-left lg:block hidden">{t.marketVolume}</span>

                    <span className="flex-[2] text-left lg:block hidden">{t.marketCircling}</span>
                    <span className="flex-[1] text-left lg:block hidden">{t.ath}</span>
                    <span className="flex-[1] text-left lg:block hidden">{t.atl}</span>
                    <span className="flex-[2] text-left sm:block hidden">{t.coinChart}</span>
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
                            <span className="w-8 h-8  rounded-full mr-4 bg-pink-500 text-left sm:block hidden"></span>
                            <span className="flex-[1.2] text-left  ">{coin.name}</span>
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
                <button className='mx-auto mt-4 p-2 mb-5 w-[120px] border-2 rounded-full'>Load More</button>
            </div>

        </>

    );
}

export default Coins;
