import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setAuthMethod } from '../features/authSlice'

const EasyLogin: React.FC = () => {
    const dispatch = useDispatch();

    const handleMailClick = () => {
        dispatch(setAuthMethod('email'));
    };
    return (
        <div className='flex flex-col justify-center gap-8'>

            <button className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                <Image src="/google.png" alt="google icon" width={20} height={20} quality={80} />
                <span>Continue with Google</span>
            </button>
            <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">or</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <button onClick={handleMailClick} className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                <Image src="/mail.png" alt="google icon" width={20} height={20} quality={80} />
                <span>Continue with Mail</span>
            </button>




        </div>
    )
}

export default EasyLogin
