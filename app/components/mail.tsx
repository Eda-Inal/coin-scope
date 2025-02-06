import React from 'react'
import Image from 'next/image'

const Mail: React.FC = () => {
    return (
        <div className='flex flex-col  gap-8 '>
            <div className="relative w-72">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className='w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10'
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/mail.png" alt="Mail Icon" width={20} height={20} />
                </span>
            </div>
            <div className="relative w-72">
                <input
                    type="password"
                    placeholder="Enter your password"
                    className='w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10'
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/password.png" alt="Password Icon" width={20} height={20} />
                </span>
            </div>


            <button className='w-72 bg-primary text-white px-4 py-3 rounded-full'>
                Sign In
            </button>

        </div>
    )
}

export default Mail
