'use client'
import React, { useState } from 'react'
import Logo from "../../public/coin.png"
import Image from 'next/image'
import ChangeTheme from './changeTheme'
import SettingsIcon from './Icons/hamburgerIcon'
import CloseIcon from './Icons/closeIcon'
import DarkIcon from './Icons/darkIcon'
import LightIcon from './Icons/lightIcon'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { toggleTheme } from '../features/theme'



const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHamburgerClick = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.theme.mode);
    const handleThemeChange = () => {
        dispatch(toggleTheme());
    };

    return (
        <nav className='py-3 px-2 sm:px-8 shadow-md dark:shadow-[0_2px_3px_0_rgba(255,255,255,0.2)]'>
            <ul className='flex justify-between items-center '>
                <div className='flex items-center gap-1 '>
                    <Image src={Logo} width={32} height={32} alt='Logo' />
                    <li>CryptoTrack </li>
                </div>

                <div className='hidden sm:flex sm:gap-4 sm:items-center '>
                    <li><ChangeTheme /></li>
                    <li>Language</li>
                    <li><button className='bg-blue-400 text-white px-3 py-1 rounded-md'>Log In </button></li>


                </div>
                {
                    isMenuOpen ?
                        <CloseIcon
                            className=" text-blue-500 sm:hidden cursor-pointer"
                            onClick={handleHamburgerClick}
                        /> :
                        <SettingsIcon
                            className=" text-blue-500 sm:hidden cursor-pointer"
                            onClick={handleHamburgerClick}
                        />
                }


            </ul>
            <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}  p-4 rounded-md mt-6 `}>
                <ul className='flex flex-col gap-4 '>
                    <li className='flex gap-2'> Theme
                        {mode === "dark" ? <LightIcon onClick={handleThemeChange} className="fill-current cursor-pointer" /> : <DarkIcon onClick={handleThemeChange} className="fill-current cursor-pointer" />}
                    </li>
                    <li>Language</li>
                    <li>
                        <button className='bg-blue-400 text-white px-3 py-1 rounded-md'>Log In</button>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
