import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import { RootState } from '@/app/store';
import { useSelector, useDispatch } from 'react-redux';
import { Coin,setSelectedCoin } from '@/app/features/coinSlice';
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { getTranslation } from '@/app/utils/getTranslation'
import { showNotification } from '@/app/features/notifactionSlice';


const Top: React.FC = () => {
    const dispatch = useDispatch();
    const allCoins = useSelector((state: any) => state.coin.allCoins);
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const user = useSelector((state: RootState) => state.user.user)
  const handleOpenModal = (coin: Coin) => {
        dispatch(setSelectedCoin(coin));
    };


    const sortedCoins = [...allCoins].sort((a: Coin, b: Coin) => b.marketCap - a.marketCap);
    const top5Coins = sortedCoins.slice(0, 5);

    return (
        <>

            <div className='flex flex-col gap-1   h-[205px] py-2  w-full justify-between '>
                <div className="flex flex-row justify-between font-semibold text-sm ">
                    <div className="flex-[0.5]   "></div>

                    <span className="flex-[0.5] text-left ">#</span>
                    <span className="flex-[1.2] text-left">{t.coin}</span>
                    <span className="flex-[1.2] text-left">{t.price}</span>
                    <span className="flex-[1.5] text-left">{t.coin24} %</span>
                    <span className="flex-[2] text-left sm:block hidden">{t.marketVolume}</span>
                    <span className="flex-[2] text-left sm:block hidden">{t.marketCap}</span>
                </div>



                {top5Coins.map((coin, index) => {
                    const isPositive = coin.change >= 0;
                    return (
                        <div key={index} className="flex flex-row justify-between items-center  text-sm border-t dark:border-gray-700 border-gray-200 p-1">
                            <div className="flex-[0.5]"> 
                            <FaRegStar className='cursor-pointer' />
                            </div>

                            <span className="flex-[0.5] text-left">{index + 1}</span>
                            <span onClick={() => handleOpenModal(coin)}  className="flex-[1.2] text-left cursor-pointer">{coin.name}</span>
                            <span onClick={() => handleOpenModal(coin)}  className="flex-[1.2] text-left cursor-pointer">{coin.price}</span>
                            <span onClick={() => handleOpenModal(coin)}  className={`flex-[1.5] gap-1 text-left flex items-center cursor-pointer ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                <span> {isPositive ? <FiArrowUp /> : <FiArrowDown />}</span>
                                {coin.change}%</span>
                            <span className="flex-[2] text-left sm:block hidden">{coin.marketVolume}</span>
                            <span className="flex-[2] text-left sm:block hidden ">{coin.marketCap}</span>
                        </div>

                    )
                }
                )}
            </div>



        </>

    )
}

export default Top
