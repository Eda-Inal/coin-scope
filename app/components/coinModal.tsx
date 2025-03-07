"use client";

import React, { useEffect, useState } from "react";
import { getTranslation } from "@/app/utils/getTranslation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { IoIosClose } from "react-icons/io";
import ReactDOM from "react-dom";
import { setSelectedCoin } from "../features/coinSlice";
import Sparkline from "./sparkline";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const CoinModal: React.FC = () => {
    const dispatch = useDispatch();
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const [mounted, setMounted] = useState(false);

    const selectedCoin = useSelector((state: RootState) => state.coin.selectedCoin);
    const isModalOpen = useSelector((state: RootState) => state.coin.isModalOpen);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isModalOpen || !mounted || !selectedCoin) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="dark:bg-darkBackground bg-lightSecondary border border-gray-500 rounded-lg w-[95%] max-w-lg px-2 py-4 relative shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full"><img src={selectedCoin.image} alt={selectedCoin.name} className="w-full h-full  object-cover rounded-full" /></span>
                        <span className="text-lg font-semibold tracking-wide ">{selectedCoin.name}</span>
                    </div>

                    <button
                        className="w-8 h-8  rounded-full text-white bg-red-500 flex items-center justify-center text-xl cursor-pointer"
                        onClick={() => dispatch(setSelectedCoin(null))}
                    >
                        <IoIosClose size={22} />
                    </button>
                </div>
                <div className="p-2">
                    {selectedCoin.sparkline_in_7d?.price ? <Sparkline data={selectedCoin.sparkline_in_7d.price} /> : <div className="h-8 w-full rounded-md bg-gray-200 dark:bg-gray-700"></div>}
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center p-2 ">
                        <span className="font-semibold"  >{t.price}</span>
                        <span>${selectedCoin.current_price}</span>

                    </div>
                    <div className="flex justify-between items-center p-2 ">
                        <span className="font-semibold"  >{t.coin24}%</span>
                        <span className={`flex items-center gap-1 ${selectedCoin.price_change_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {selectedCoin.price_change_percentage_24h > 0 ? <TiArrowSortedUp className="text-green-500" /> : <TiArrowSortedDown className="text-red-500" />}
                            {selectedCoin.price_change_percentage_24h.toFixed(2)}%
                        </span>


                    </div>
                    <div className="flex justify-between items-center p-2 ">
                        <span className="font-semibold"  >{t.marketCap}</span>
                        <span>${selectedCoin.market_cap.toLocaleString()}</span>

                    </div>
                    <div className="flex justify-between items-center p-2 ">
                        <span className="font-semibold"  >{t.marketVolume}</span>
                        <span>${selectedCoin.total_volume.toLocaleString()}</span>

                    </div>
                    <div className="flex justify-between items-center p-2">
                        <span className="font-semibold"  >{t.marketCircling}</span>
                        <span>${selectedCoin.total_supply.toLocaleString()}</span>

                    </div>
                    <div className="flex justify-between items-center p-2 ">
                        <span className="font-semibold"  >{t.ath}</span>
                        <span>${selectedCoin.ath.toLocaleString()}</span>

                    </div>
                    <div className="flex justify-between items-center p-2 ">
                        <span className="font-semibold"  >{t.atl}</span>
                        <span>${selectedCoin.atl.toLocaleString()}</span>

                    </div>

                </div>
            </div>
        </div>,
        document.getElementById("modal-root")!
    );
};

export default CoinModal;
