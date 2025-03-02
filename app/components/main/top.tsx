import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import { RootState } from '@/app/store';
import { useSelector, useDispatch } from 'react-redux';
import { CryptoData, setSelectedCoin } from '@/app/features/coinSlice';
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { getTranslation } from '@/app/utils/getTranslation';
import { useUserFavorites } from '@/app/hooks/useUserFavorites';
import { showNotification } from '@/app/features/notifactionSlice';

const Top: React.FC = () => {
    const dispatch = useDispatch();
    const allCoins = useSelector((state: any) => state.coin.allCoins);
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const { user, favoriteCoins, addFavoriteCoin, removeFavoriteCoin } = useUserFavorites();

    const handleOpenModal = (coin: CryptoData) => {
        dispatch(setSelectedCoin(coin));
    };

    const sortedCoins = [...allCoins].sort((a: CryptoData, b: CryptoData) => b.market_cap - a.market_cap);
    const top5Coins = sortedCoins.slice(0, 5);

    const handleFavoriteClick = (coin: CryptoData) => {
        if (!user) {
            dispatch(
                showNotification({
                    message: t.favLoginError,
                    type: 'error',
                })
            );
            return;
        }
        const isFavorite = favoriteCoins.includes(coin.name);
        if (isFavorite) {
            removeFavoriteCoin(coin.name);
        } else {
            addFavoriteCoin({ name: coin.name, price: coin.current_price, change: coin.price_change_percentage_24h });
        }
    };

    return (
        <div className='flex flex-col gap-1 h-[205px] py-2 w-full justify-between'>
            <div className="flex flex-row justify-between font-semibold text-sm">
                <div className="flex-[0.5]"></div>
                <span className="flex-[0.5] text-left">#</span>
                <span className="flex-[1.2] text-left">{t.coin}</span>
                <span className="flex-[1.2] text-left">{t.price}</span>
                <span className="flex-[1.5] text-left">{t.coin24} %</span>
                <span className="flex-[2] text-left sm:block hidden">{t.marketVolume}</span>
                <span className="flex-[2] text-left sm:block hidden">{t.marketCap}</span>
            </div>

            {top5Coins.map((coin, index) => {
                const isPositive = coin.change >= 0;
                const isFavorite = favoriteCoins.includes(coin.name);

                return (
                    <div key={index} className="flex flex-row justify-between items-center text-sm border-t dark:border-gray-700 border-gray-200 p-1">
                        <div className="flex-[0.5]">
                            {isFavorite ? (
                                <FaStar className='cursor-pointer text-yellow-500' onClick={() => handleFavoriteClick(coin)} />
                            ) : (
                                <FaRegStar className='cursor-pointer' onClick={() => handleFavoriteClick(coin)} />
                            )}
                        </div>

                        <span className="flex-[0.5] text-left">{index + 1}</span>
                        <span onClick={() => handleOpenModal(coin)} className="flex-[1.2] text-left cursor-pointer">{coin.name}</span>
                        <span onClick={() => handleOpenModal(coin)} className="flex-[1.2] text-left cursor-pointer">${coin.current_price.toLocaleString()}</span>
                        <span onClick={() => handleOpenModal(coin)} className={`flex-[1.5] gap-1 text-left flex items-center cursor-pointer ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            <span>{isPositive ? <FiArrowUp /> : <FiArrowDown />}</span>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                        <span className="flex-[2] text-left sm:block hidden">{coin.total_volume.toLocaleString()}</span>
                        <span className="flex-[2] text-left sm:block hidden">{coin.market_cap.toLocaleString()}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Top;
