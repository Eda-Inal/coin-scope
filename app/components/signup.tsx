import React from 'react'
import Image from 'next/image'
import { RootState } from '../store'
import { getTranslation } from '../utils/getTranslation'
import { useSelector } from 'react-redux'

const SignUp: React.FC = () => {

    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    return (
        <div className='flex flex-col  gap-6 '>
            <div className="relative w-72">
                <input
                    type="email"
                    placeholder={t.enterYourEmail}
                    className='w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10'
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/mail.png" alt="Mail Icon" width={20} height={20} />
                </span>
            </div>
            <div className="relative w-72">
                <input
                    type="password"
                    placeholder={t.enterYourPassword}
                    className='w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10'
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/password.png" alt="Password Icon" width={20} height={20} />
                </span>
            </div>
            <div className="relative w-72">
                <input
                    type="password"
                    placeholder={t.confirmYourPassword}
                    className='w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10'
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/password.png" alt="Password Icon" width={20} height={20} />
                </span>
            </div>

            <button className='w-72 bg-primary  hover:bg-sky-600  text-white px-4 py-3 rounded-full'>
                {t.signUp}
            </button>
            <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">{t.or}</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <button className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                <Image src="/google.png" alt="google icon" width={20} height={20} quality={80} />
                <span>{t.signUpWithGoogle}</span>
            </button>

        </div>
    )
}

export default SignUp
