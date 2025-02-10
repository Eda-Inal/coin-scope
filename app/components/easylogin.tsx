import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { setAuthMethod } from '../features/authSlice'
import { RootState } from '../store'
import { getTranslation } from '../utils/getTranslation'
import { useSelector } from 'react-redux'
import GoogleAuth from './googleAuth'
import Or from './or'

const EasyLogin: React.FC = () => {
    const dispatch = useDispatch();
    const handleMailClick = () => {
        dispatch(setAuthMethod('email'));
    };
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);

    return (
        <div className='flex flex-col justify-center gap-8'>

            <GoogleAuth />
            <Or />
            <button onClick={handleMailClick} className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                <Image src="/mail.png" alt="google icon" width={20} height={20} quality={80} />
                <span>{t.continueWithMail}</span>
            </button>
        </div>
    )
}

export default EasyLogin
