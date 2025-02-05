'use client'
import React, { useState } from 'react'
import { EnglishFlag,TurkishFlag,GermanyFlag } from './Icons/flagsIcon';
import { setLanguage } from '../features/languageSlice';
import { RootState } from '../store';
import { useDispatch, useSelector } from "react-redux";

const LanguageNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const locale = useSelector((state: RootState) => state.language.locale);
    const handleLanguageChange = (lang: string) => {
        dispatch(setLanguage(lang));
        setIsOpen(false);
      };
    return (
        <div className="relative ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2  rounded-md border"
            >
                Language
            </button>
            {isOpen && (
                <ul className="absolute  mt-2 w-40 bg-lightBackground dark:bg-darkBackground border shadow-md rounded-md">
                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                     onClick={() => handleLanguageChange("en")}
                    >
                        <span className="mr-2"><EnglishFlag /></span> English
                    </li>
                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleLanguageChange("tr")}
                    >
                        <span className="mr-2"><TurkishFlag /></span> Türkçe
                    </li>
                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleLanguageChange("de")}
                    >
                        <span className="mr-2"><GermanyFlag /></span> Deutsch
                    </li>
                </ul>
            )}
        </div>
    )
}

export default LanguageNavbar
