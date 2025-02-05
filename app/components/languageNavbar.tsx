'use client'
import React, { useState } from 'react'
import { EnglishFlag, TurkishFlag, GermanyFlag } from './Icons/flagsIcon';
import { setLanguage } from '../features/languageSlice';
import { RootState } from '../store';
import { useDispatch, useSelector } from "react-redux";

const LanguageNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const { locale, language } = useSelector((state: RootState) => state.language);
    const handleLanguageChange = (lang: string) => {
        dispatch(setLanguage(lang));
        setIsOpen(false);
    };
    return (
        <div className="relative ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 w-28  border rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 text-sm flex items-center justify-between "
            >
                {language === "English" && <EnglishFlag />}
                {language === "Türkçe" && <TurkishFlag />}
                {language === "Deutsch" && <GermanyFlag />}
                {language}
            </button>
            {isOpen && (
                <ul className="absolute  mt-1 w-28 flex flex-col items-start bg-lightBackground dark:bg-darkBackground  shadow-md rounded-sm left-1/2 transform -translate-x-1/2 text-sm">
                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 gap-2 border-b w-full"
                        onClick={() => handleLanguageChange("en")}
                    >
                        <EnglishFlag /> English
                    </li>
                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 gap-2 border-b w-full"
                        onClick={() => handleLanguageChange("tr")}
                    >
                        <TurkishFlag /> Türkçe
                    </li>
                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 gap-2"
                        onClick={() => handleLanguageChange("de")}
                    >
                        <GermanyFlag /> Deutsch
                    </li>
                </ul>
            )}
        </div>
    )
}

export default LanguageNavbar
