import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { getTranslation } from '@/app/utils/getTranslation';
import { fetchTrendCoins } from '@/app/features/trendcoinsSlice';
import { TiArrowSortedDown,TiArrowSortedUp  } from "react-icons/ti";


const Top: React.FC = () => {
    const dispatch = useDispatch();
    const trendCoins = useSelector((state: RootState) => state.trend.trendCoins);
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);

    useEffect(() => {
        dispatch(fetchTrendCoins() as any);
    }, [dispatch]);

    return (
        <div className='flex flex-col gap-1 h-[205px] py-2 w-full justify-between'>
            <div className="flex flex-row justify-between font-semibold text-sm">
            <span className="w-5 h-5 rounded-full mr-4  text-left"></span>
                <span className="flex-[1.5] text-left">{t.coin}</span>
                <span className="flex-[1.2] text-left">{t.price}</span>
                <span className="flex-[1.5] text-left">{t.coin24} %</span>
                <span className="flex-[2] text-left sm:block hidden">{t.marketVolume}</span>
                <span className="flex-[2] text-left sm:block hidden">{t.marketCap}</span>
            </div>

            {trendCoins.map((coin, index) => {
                const isPositive = coin.price_change_percentage_24h >= 0;
                return (
                    <div key={index} className="flex flex-row justify-between items-center text-sm  dark:border-gray-700 border-gray-200 p-1">
                         <span className="w-5 h-5  rounded-full mr-4  text-left">
                         <img src={coin.thumb} alt={coin.name} className="w-full h-full object-cover rounded-full" />
                         </span>
                       <span className="flex-[1.5] text-left overflow-hidden text-ellipsis whitespace-nowrap font-semibold">{coin.name}</span>

                        <span className="flex-[1.2] text-left ">${coin.price?.toLocaleString()}</span>
                        <span className={`flex-[1.5] gap-1 text-left flex items-center  font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            <span>{isPositive ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</span>
                            {coin.price_change_percentage_24h?.toFixed(2)}%
                        </span>
                        <span className="flex-[2] text-left sm:block hidden">{coin.total_volume?.toLocaleString()}</span>
                        <span className="flex-[2] text-left sm:block hidden">{coin.market_cap?.toLocaleString()}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Top;
