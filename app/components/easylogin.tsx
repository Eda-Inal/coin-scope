import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setAuthMethod } from '../features/authSlice'
import { RootState } from '../store'
import { getTranslation } from '../utils/getTranslation'
import { useSelector } from 'react-redux'

const EasyLogin: React.FC = () => {
    const dispatch = useDispatch();

    const handleMailClick = () => {
        dispatch(setAuthMethod('email'));
    };
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    return (
        <div className='flex flex-col justify-center gap-8'>

            <button className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                <Image src="/google.png" alt="google icon" width={20} height={20} quality={80} />
                <span>{t.continueWithGoogle}</span>
            </button>
            <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">{t.or}</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <button onClick={handleMailClick} className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                <Image src="/mail.png" alt="google icon" width={20} height={20} quality={80} />
                <span>{t.continueWithMail}</span>
            </button>
        </div>
    )
}

export default EasyLogin
