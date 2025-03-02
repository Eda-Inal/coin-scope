'use client'
import React, { useState, useEffect } from 'react'
import { setLanguage } from '../../features/languageSlice';
import { RootState } from '../../store';
import { useDispatch, useSelector } from "react-redux";
import { setIsMenuOpen } from '../../features/navbarSlice';

const LanguageNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const { language } = useSelector((state: RootState) => state.language);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLocale = localStorage.getItem("language");
            if (savedLocale) {
                dispatch(setLanguage(savedLocale));
            }
        }
    }, [dispatch]);
    const handleLanguageChange = (lang: string) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("language", lang);
        }
        dispatch(setLanguage(lang));
        setIsOpen(false);
        dispatch(setIsMenuOpen());
    };

    return (
        <div className="relative ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-1 w-28  border-b   hover:border-b hover:border-primary "
            >

                {language}
            </button>
            {isOpen && (
                <ul className="absolute z-40  mt-1 w-28 flex flex-col items-start bg-lightBackground dark:bg-darkBackground   shadow-md rounded-sm left-1/2 transform -translate-x-1/2 text-sm">
                    <li className="px-4 py-1 text-center cursor-pointer hover:bg-lightSecondary  dark:hover:bg-darkSecondary gap-2  w-full"
                        onClick={() => handleLanguageChange("en")}
                    >
                        English
                    </li>
                    <li className="px-4 py-1 text-center cursor-pointer hover:bg-lightSecondary  dark:hover:bg-darkSecondary gap-2  w-full"
                        onClick={() => handleLanguageChange("tr")}
                    >
                        Türkçe
                    </li>
                    <li className="px-4 py-1 text-center cursor-pointer hover:bg-lightSecondary  dark:hover:bg-darkSecondary gap-2  w-full"
                        onClick={() => handleLanguageChange("de")}
                    >
                        Deutsch
                    </li>
                </ul>
            )}
        </div>
    )
}

export default LanguageNavbar
