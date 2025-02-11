'use client'
import React, { useState } from 'react'


const Profile: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-1 w-28  border-b   hover:border-b hover:border-primary "
            >

                My Profile
            </button>
            {isOpen && (
                <ul className="absolute z-40  mt-1 w-28 flex flex-col items-start bg-lightBackground dark:bg-darkBackground   shadow-md rounded-sm left-1/2 transform -translate-x-1/2 text-sm ">
                    <li className="px-4 py-1 text-center cursor-pointer border-b hover:bg-lightSecondary  dark:hover:bg-darkSecondary gap-2  w-full"
                       
                    >
                        Favourites
                    </li>
                    <li className="px-4 py-1 text-center cursor-pointer hover:bg-lightSecondary   dark:hover:bg-darkSecondary gap-2  w-full"
                      
                    >
                      Sign out
                    </li>
                
                </ul>
            )}
        </div>
    )
}

export default Profile