'use client'
import React, { useState } from 'react'
import { EnglishFlag } from './Icons/flagsIcon';
import { TurkishFlag } from './Icons/flagsIcon';
import { GermanyFlag } from './Icons/flagsIcon';

const LanguageNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                        <span className="mr-2"><EnglishFlag /></span> English
                    </li>
                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                        <span className="mr-2"><TurkishFlag /></span> Türkçe
                    </li>
                    <li className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                        <span className="mr-2"><GermanyFlag /></span> Deutsch
                    </li>
                </ul>
            )}
        </div>
    )
}

export default LanguageNavbar
