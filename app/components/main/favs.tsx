'use client'
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { Coin, toggleFavorite } from "@/app/features/coinSlice";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";


const Favourites: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const favoriteCoins = useSelector((state: RootState) => state.coin.favorites);
    console.log(favoriteCoins);
    const dispatch = useDispatch()

    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth >= 640 ? 4 : 2);
            setCurrentPage(0);
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(favoriteCoins.length / itemsPerPage);
    const paginatedCoins = favoriteCoins.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    const handleRemoveFavorite = (coin: Coin) => {
        dispatch(toggleFavorite(coin.symbol))
    }

    return (
        <div className=" flex flex-col mt-1 relative">

            {favoriteCoins.length === 0 ? (
                <div className="h-[170px]">
                    <div className=" text-gray-500 dark:text-gray-400 text-sm mt-2 flex jus items-center gap-2 ">
                        <FaStar className="text-yellow-500" />
                        <span>Your favorites list is empty. Start adding your favorite coins! Start to follow!</span>
                        <FaStar className="text-yellow-500" />
                    </div>
                </div>

            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm w-full mx-auto transition-transform duration-300 h-[170px]">
                    {paginatedCoins.map((coin, index) => {
                        const isPositive = coin.change >= 0;
                        return (
                            <div key={index} className="flex justify-between p-2 rounded-lg shadow-sm w-full h-[85px] bg-[linear-gradient(to_right_bottom,#ffffff,#ffffff,#f9fafb,#f6f7f8,#f3f5f6,#e3eef3,#d2e8f0,#c0e1ec,#9dd3e9,#79c4e9,#7DD6FF,#7DD6FF)] dark:bg-[linear-gradient(to_right_bottom,#263354,#232c4c,#1f2644,#1c1f3d,#181935,#1d2040,#21284b,#253057,#2e4a7a,#31679f,#2b85c4,#0ea5e9)] gap-3">
                                <div className="flex flex-col w-1/2 h-full justify-between">
                                    <div className="flex flex-row items-center gap-2">
                                        <div onClick={() => handleRemoveFavorite(coin)} className="cursor-pointer">
                                            <FaStar className="text-yellow-400" size={16} />
                                        </div>
                                        <div className="w-6 h-6 bg-red-200 rounded-full"></div>
                                        <div className="font-semibold">{coin.name}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-xs">${coin.price.toLocaleString()}</span>
                                        <span className={`text-xs font-medium flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                            <span> {isPositive ? <FiArrowUp /> : <FiArrowDown />}</span>
                                            {coin.change}%
                                        </span>
                                    </div>
                                </div>
                                <div className="h-full w-1/2"></div>
                            </div>
                        )
                    }
                    )}
                </div>
            )}


            {favoriteCoins.length > 0 ? (
                <div className="flex w-full justify-between mt-2 h-[30px] ">
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
            ) : <div className="mt-2 h-[30px]"></div>

            }

        </div>
    );
};

export default Favourites;
