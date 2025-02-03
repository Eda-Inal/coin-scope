import React from 'react'
import Logo from "../../public/coin.png"
import Image from 'next/image'


const Navbar: React.FC = () => {
    return (
        <nav className='py-3 px-8 border-b-2'>
            <ul className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <Image src={Logo} width={32} height={32} alt='Logo' />
                    <li>CryptoTrack </li>
                </div>

                <div className='flex gap-4 items-center'>
                    <li>Theme</li>
                    <li>Language</li>
                    <li><button className='bg-blue-600 text-white px-3 py-1 rounded-md'>Log In </button></li>
                </div>
            </ul>

        </nav>
    )
}

export default Navbar
