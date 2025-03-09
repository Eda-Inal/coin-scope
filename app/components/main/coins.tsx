import React, { useEffect } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { setSelectedCoin, fetchCryptoData, CryptoData } from '@/app/features/coinSlice';
import { getTranslation } from '@/app/utils/getTranslation';
import { useUserFavorites } from '@/app/hooks/useUserFavorites';
import { showNotification } from '@/app/features/notifactionSlice';
import Sparkline from '../sparkline';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Image from 'next/image';

const Coins: React.FC = () => {
    const dispatch = useDispatch();
    const { status, error, filteredCoins } = useSelector((state: RootState) => state.coin);
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCryptoData() as any);
        }
    }, [dispatch, status]);

    const { user, favoriteCoins, addFavoriteCoin, removeFavoriteCoin } = useUserFavorites();

    const handleOpenModal = (coin: CryptoData) => {
        dispatch(setSelectedCoin(coin));
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='flex flex-col gap-2 h-full w-full  justify-between'>
            <div className="flex flex-row justify-between font-semibold p-2 border-b dark:border-b-gray-700 items-center
                sticky top-0 bg-lightPrimary dark:bg-darkBackground bg-lightBackground z-10">
                <div className="flex-[0.3]"></div>
                <span className="flex-[0.3] text-left">#</span>
                <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-4  text-left"></span>
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
            {
                filteredCoins.length === 0 ? (
                    <div>
                        {t.noCoinsFound}
                    </div>
                ) :
                    (
                        filteredCoins.map((coin, index) => {
                            const isPositive = coin.price_change_percentage_24h >= 0;
                            const isFavorite = favoriteCoins.includes(coin.name);

                            return (
                                <div
                                    key={coin.id}
                                    className="flex flex-row justify-between items-center  text-sm py-3 px-2 mt-1 dark:hover:bg-darkSecondary hover:bg-lightSecondary "
                                >
                                    <div className="flex-[0.3] text-lg cursor-pointer ">
                                        {isFavorite ? (
                                            <FaStar
                                                className="text-yellow-500"
                                                onClick={() => removeFavoriteCoin(coin.name)}
                                            />
                                        ) : (
                                            <FaRegStar
                                                className="text-gray-400"
                                                onClick={() => {
                                                    if (!user) {
                                                        dispatch(
                                                            showNotification({
                                                                message: t.favLoginError,
                                                                type: 'error',
                                                            })
                                                        );
                                                        return;
                                                    }
                                                    addFavoriteCoin({ name: coin.name, price: coin.current_price, change: coin.price_change_percentage_24h });
                                                }}
                                            />
                                        )}
                                    </div>
                                    <span className="flex-[0.3] text-left">{index + 1}</span>
                                    <span onClick={() => handleOpenModal(coin)} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-4 cursor-pointer text-left "> <Image
                                        src={coin.image}
                                        alt={coin.name}
                                        layout="intrinsic"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                        objectFit="cover"
                                    /></span>
                                    <span onClick={() => handleOpenModal(coin)} className="flex-[1.2] cursor-pointer text-left font-semibold ">{coin.name}</span>
                                    <span onClick={() => handleOpenModal(coin)} className="flex-[1.2] text-left cursor-pointer">${coin.current_price.toLocaleString()}</span>
                                    <span onClick={() => handleOpenModal(coin)} className={`flex-[1.2] flex cursor-pointer items-center gap-1 font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                        {isPositive ? <TiArrowSortedUp className="text-green-500" /> : <TiArrowSortedDown className="text-red-500" />}
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                    <span className="flex-[2] text-left md:block hidden">{coin.market_cap.toLocaleString()}</span>
                                    <span className="flex-[2] text-left lg:block hidden">{coin.total_volume.toLocaleString()}</span>
                                    <span className="flex-[2] text-left lg:block hidden">{coin.circulating_supply.toLocaleString()}</span>
                                    <span className="flex-[1] text-left lg:block hidden">${coin.ath.toLocaleString()}</span>
                                    <span className="flex-[1] text-left lg:block hidden">${coin.atl.toLocaleString()}</span>



                                    {/* Sparkline grafiği */}
                                    <div className="flex-[2] text-left sm:block hidden">
                                        {coin.sparkline_in_7d?.price ? <Sparkline data={coin.sparkline_in_7d.price} /> : <div className="h-8 w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>}
                                    </div>

                                </div>
                            );
                        })
                    )
            }

        </div>
    );
};

export default Coins;
