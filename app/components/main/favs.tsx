'use client'
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import {FaRegStar,FaStar  } from "react-icons/fa";

const favoriteCoins = [
    { name: "Bitcoin", symbol: "BTC", price: 450, change: 2.5 },
    { name: "Ethereum", symbol: "ETH", price: 32, change: -1.2 },
    { name: "Solana", symbol: "SOL", price: 12, change: 5.3 },
    { name: "Cardano", symbol: "ADA", price: 1.2, change: -0.5 },
    { name: "XRP", symbol: "XRP", price: 0.8, change: 3.1 },
    { name: "Polkadot", symbol: "DOT", price: 5.2, change: -2.4 },
];

const Favourites: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);


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

    return (
        <div className=" flex flex-col mt-1 relative">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm w-full mx-auto transition-transform duration-300 h-[170px]">
                {paginatedCoins.map((coin, index) => (
                    <div key={index} className="flex justify-between p-2 rounded-lg shadow-sm w-full h-[85px] bg-[linear-gradient(to_right_bottom,#ffffff,#ffffff,#f9fafb,#f6f7f8,#f3f5f6,#e3eef3,#d2e8f0,#c0e1ec,#9dd3e9,#79c4e9,#7DD6FF,#7DD6FF)]   dark:bg-[linear-gradient(to_right_bottom,#263354,#232c4c,#1f2644,#1c1f3d,#181935,#1d2040,#21284b,#253057,#2e4a7a,#31679f,#2b85c4,#0ea5e9)] gap-3">
                        <div className="flex flex-col w-1/2 h-full justify-between ">
                            <div className="flex flex-row items-center gap-2 ">
                                <div className="cursor-pointer"><FaStar className="text-yellow-400" size={16}/></div>
                                <div className="w-6 h-6 bg-red-200 rounded-full"></div>
                                <div className="font-semibold">{coin.name}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-xs">${coin.price.toLocaleString()}</span>
                                <span className={`text-xs font-medium ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {coin.change}%
                                </span>
                            </div>
                        </div>
                        <div className="h-full w-1/2"></div>
                    </div>
                ))}
            </div>


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
        </div>
    );
};

export default Favourites;
