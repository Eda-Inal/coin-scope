'use client'
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { CryptoData } from "@/app/features/coinSlice";
import { getTranslation } from '@/app/utils/getTranslation'
import { useUserFavorites } from "@/app/hooks/useUserFavorites";
import Sparkline from "../sparkline";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { setSelectedCoin } from "@/app/features/coinSlice";
import Image from "next/image";

const Favourites: React.FC = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const locale = useSelector((state: RootState) => state.language.locale);
    const allCoins = useSelector((state: RootState) => state.coin.allCoins);
    const { favoriteCoins, removeFavoriteCoin } = useUserFavorites();

    // Favori coin'lere ait tüm bilgileri almak için
    const favoriteCoinsWithDetails = favoriteCoins
        .map(coinName => allCoins.find(coin => coin.name === coinName))
        .filter((coin): coin is CryptoData => coin !== undefined);
    const t = getTranslation(locale);

    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth >= 640 ? 4 : 2);
            setCurrentPage(0);
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(favoriteCoinsWithDetails.length / itemsPerPage);
    const paginatedCoins = favoriteCoinsWithDetails.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    const handleOpenModal = (coin: CryptoData) => {
        dispatch(setSelectedCoin(coin));
    };

    return (
        <div className="flex flex-col mt-1 relative">

            {favoriteCoinsWithDetails.length === 0 ? (
                <div className="h-[170px]">
                    <div className="text-gray-500 dark:text-gray-400 text-sm mt-2 flex jus items-center gap-2">
                        <FaStar className="text-yellow-500" />
                        <span>{t.emptyFavorite}</span>
                        <FaStar className="text-yellow-500" />
                    </div>
                </div>

            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm w-full mx-auto transition-transform duration-300 h-[170px]">
                    {paginatedCoins.map((coin, index) => {
                        const isPositive = coin.price_change_percentage_24h >= 0;
                        return (
                            <div key={index} className="flex justify-between p-2 rounded-lg shadow-sm w-full h-[85px] 
 gap-3">
                                <div className="flex flex-col w-1/2 h-full justify-between">
                                    <div className="flex flex-row items-center gap-2">
                                        <div className="cursor-pointer">
                                            <FaStar
                                                className="text-yellow-400"
                                                size={16}
                                                onClick={() => removeFavoriteCoin(coin.name)}
                                            />
                                        </div>


                                        <div onClick={() => handleOpenModal(coin)} className="w-6 h-6 rounded-full cursor-pointer">
                                            <Image
                                                src={coin.image}
                                                alt={coin.name}
                                                layout="intrinsic"
                                                width={24}
                                                height={24}
                                                className="rounded-full"
                                                objectFit="cover"
                                            />
                                        </div>

                                        <div onClick={() => handleOpenModal(coin)} className="font-semibold cursor-pointer">{coin.name}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-xs">${coin.current_price.toLocaleString()}</span>
                                        <span className={`text-xs font-medium flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                            <span> {isPositive ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</span>
                                            {coin.price_change_percentage_24h.toFixed(2)}%
                                        </span>
                                    </div>
                                </div>
                                <div className="h-full w-1/2 flex items-center justify-center">{coin.sparkline_in_7d?.price && <Sparkline data={coin.sparkline_in_7d.price} />}</div>
                            </div>
                        )
                    })}
                </div>
            )}

            {favoriteCoinsWithDetails.length > 0 ? (
                <div className="flex w-full justify-between mt-2 h-[30px]">
                    <button
                        className={`cursor-pointer hover:text-primary ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                        disabled={currentPage === 0}
                    >
                        <MdKeyboardDoubleArrowLeft size={20} />
                    </button>
                    <button
                        className={`cursor-pointer hover:text-primary ${currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                        disabled={currentPage === totalPages - 1}
                    >
                        <MdKeyboardDoubleArrowRight size={20} />
                    </button>
                </div>
            ) : <div className="mt-2 h-[30px]"></div>}
        </div>
    );
};

export default Favourites;
