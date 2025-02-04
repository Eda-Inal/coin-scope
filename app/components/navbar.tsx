'use client'
import React from 'react'
import Logo from "../../public/coin.png"
import type { RootState } from '../store'
import Image from 'next/image'
import ChangeTheme from './changeTheme'
import { useSelector } from 'react-redux'


const Navbar: React.FC = () => {
    const count = useSelector((state: RootState) => state.theme.value)
    return (
        <nav className='py-3 px-8 border-b-2'>
            <ul className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <Image src={Logo} width={32} height={32} alt='Logo' />
                    <li>CryptoTrack </li>
                </div>

                <div className='flex gap-4 items-center'>
                    <li><ChangeTheme /></li>
                    <li>Language {count}</li>
                    <li><button className='bg-blue-400 text-white px-3 py-1 rounded-md'>Log In </button></li>
                </div>
            </ul>

        </nav>
    )
}

export default Navbar
