'use client'
import React from 'react'
import Logo from "../../public/coin.png"
import Image from 'next/image'
import ChangeTheme from './changeTheme'
import { HamburgerIcon, CloseIcon, DarkIcon, LightIcon } from './Icons/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { toggleTheme } from '../features/theme'
import LanguageNavbar from './languageNavbar';
import { setIsMenuOpen } from '../features/navbarSlice'
import Link from 'next/link'
import { getTranslation } from '../utils/getTranslation'


const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.theme.mode);
    const isMenuOpen = useSelector((state: RootState) => state.navbar.isMenuOpen);
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const handleThemeChange = () => {
        dispatch(toggleTheme());
    };
    const handleHamburgerClick = () => {
        dispatch(setIsMenuOpen())
    };

    return (
        <nav className="relative py-3 px-2 sm:px-8 shadow-md dark:shadow-[0_2px_3px_0_rgba(255,255,255,0.2)]">
            <ul className="flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Image src={Logo} width={32} height={32} alt="Logo" />
                        <li>CryptoTrack</li>
                    </div>
                </Link>
                <div className="hidden sm:flex sm:gap-4 sm:items-center">
                    <li><ChangeTheme /></li>
                    <li><LanguageNavbar /></li>
                    <li>
                        <Link href="/login">
                            <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-1 w-28 rounded-md">
                                {t.signIn}
                            </button>
                        </Link>
                    </li>
                </div>


                <div className="sm:hidden">
                    {isMenuOpen ?
                        <CloseIcon className="text-blue-500 cursor-pointer" onClick={handleHamburgerClick} />
                        :
                        <HamburgerIcon className="text-blue-500 cursor-pointer" onClick={handleHamburgerClick} />
                    }
                </div>
            </ul>


            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-lightBackground shadow-md  dark:bg-darkBackground dark:shadow-[0_2px_3px_0_rgba(255,255,255,0.2)] z-20 py-3 px-2`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <Image src={Logo} width={32} height={32} alt="Logo" />
                        <div>CryptoTrack</div>
                    </div>
                    <CloseIcon onClick={handleHamburgerClick} className='cursor-pointer text-blue-500' />
                </div>
                <ul className="flex flex-col gap-4 mt-8 items-center">
                    <li onClick={handleThemeChange} className="flex cursor-pointer gap-2 border px-4 py-1 w-28 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600" >
                        Theme
                        {mode === "dark" ? <LightIcon className="fill-current cursor-pointer" /> : <DarkIcon className="fill-current cursor-pointer" />}
                    </li>
                    <li><LanguageNavbar /></li>
                    <li>
                        <Link href="/login">
                            <button className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-1 w-28 rounded-md" onClick={handleHamburgerClick}>
                                {t.signIn}
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
