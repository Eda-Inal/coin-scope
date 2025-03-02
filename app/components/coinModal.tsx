"use client";

import React, { useEffect, useState } from "react";
import { getTranslation } from "@/app/utils/getTranslation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { IoIosClose } from "react-icons/io";
import ReactDOM from "react-dom";
import { setSelectedCoin } from "../features/coinSlice";

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
            <div className="dark:bg-darkBackground bg-lightSecondary border-2 rounded-lg w-[95%] max-w-lg px-2 py-4 relative shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-red-300"></span>
                        <span className="text-lg font-semibold">{selectedCoin.name}</span>
                    </div>

                    <button
                        className="w-7 h-7 border rounded-md flex items-center justify-center text-lg cursor-pointer"
                        onClick={() => dispatch(setSelectedCoin(null))}
                    >
                        <IoIosClose size={22} />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex flex-col gap-2 font-medium text-gray-500 dark:text-gray-400">
                        <span>{t.coin}</span>
                        <span>{t.price}</span>
                        <span>{t.coin24}</span>
                        <span>{t.marketCap}</span>
                        <span>{t.marketVolume}</span>
                        <span>{t.marketCircling}</span>
                        <span>{t.ath}</span>
                        <span>{t.atl}</span>
                    </div>

                    <div className="flex flex-col gap-2 text-right font-semibold">
                        <span>{selectedCoin.name}</span>
                        <span>${selectedCoin.current_price.toLocaleString()}</span>
                        <span className={selectedCoin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}>
                            {selectedCoin.price_change_percentage_24h}%
                        </span>
                        <span>${selectedCoin.market_cap.toLocaleString()}</span>
                        <span>${selectedCoin.total_volume.toLocaleString()}</span>
                        <span>{selectedCoin.total_supply.toLocaleString()}</span>
                        <span>${selectedCoin.ath.toLocaleString()}</span>
                        <span>${selectedCoin.atl.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")!
    );
};

export default CoinModal;
