'use client'
import React, { useEffect, useState } from 'react'
import Logo from "../../../public/coin.png"
import Image from 'next/image'
import ChangeTheme from '../theme/changeTheme'
import { HamburgerIcon, CloseIcon, DarkIcon, LightIcon } from '../Icons/icons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { toggleTheme } from '../../features/theme'
import LanguageNavbar from './languageNavbar';
import { setIsMenuOpen } from '../../features/navbarSlice'
import Link from 'next/link'
import { getTranslation } from '../../utils/getTranslation'
import Profile from './profile'


const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.theme.mode);
    const isMenuOpen = useSelector((state: RootState) => state.navbar.isMenuOpen);
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("theme") as "light" | "dark") || "dark";
        }
        return "dark"; 
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const handleThemeChange = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        dispatch(toggleTheme());
    };
    const handleHamburgerClick = () => {
        dispatch(setIsMenuOpen())
    };

    return (
        <nav className="relative py-3 px-2 sm:px-8  ">
            <ul className="flex justify-between items-center">
                <Link href="/">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Image src={Logo} width={32} height={32} alt="Logo" />
                        <li>CryptoTrack</li>
                    </div>
                </Link>
                <div className="hidden sm:flex sm:gap-5 sm:items-center">
                    <li><ChangeTheme /></li>
                    <li><LanguageNavbar /></li>
                    {isAuthenticated ? (
                        <li><Profile /></li>
                    ) : (
                        <li>
                            <Link href="/login">
                                <button className="bg-primary hover:bg-sky-600 text-white px-4 py-1 w-28 rounded-md font-semibold" onClick={handleHamburgerClick}>
                                    {t.signIn}
                                </button>
                            </Link>
                        </li>
                    )}
                </div>


                <div className="sm:hidden">
                    {isMenuOpen ?
                        <CloseIcon className="text-primary cursor-pointer" onClick={handleHamburgerClick} />
                        :
                        <HamburgerIcon className="text-primary cursor-pointer" onClick={handleHamburgerClick} />
                    }
                </div>
            </ul>


            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-lightBackground shadow-md  dark:bg-darkBackground dark:shadow-[0_2px_3px_0_rgba(255,255,255,0.2)] z-20 py-3 px-2`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <Image src={Logo} width={32} height={32} alt="Logo" />
                        <div>CryptoTrack</div>
                    </div>
                    <CloseIcon onClick={handleHamburgerClick} className='cursor-pointer text-primary' />
                </div>
                <ul className="flex flex-col gap-4 mt-8 items-center">
                    <li onClick={handleThemeChange} className="flex cursor-pointer gap-2 border-b px-4 py-1 w-28 hover:border-b hover:border-primary  text-md " >
                        Theme
                        {mode === "dark" ? <LightIcon className="fill-current cursor-pointer" /> : <DarkIcon className="fill-current cursor-pointer" />}
                    </li>
                    <li><LanguageNavbar /></li>
                    {isAuthenticated ? (
                        <li><Profile /></li>
                    ) : (
                        <li>
                            <Link href="/login">
                                <button className="bg-primary hover:bg-sky-600 text-white px-4 py-1 w-28 rounded-md font-semibold" onClick={handleHamburgerClick}>
                                    {t.signIn}
                                </button>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
