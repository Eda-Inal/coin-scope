import React from 'react'
import Image from 'next/image'
import { RootState } from '../store'
import { getTranslation } from '../utils/getTranslation'
import { useSelector } from 'react-redux'
import { setSignUpMail } from '../features/authSlice'
import { useDispatch } from 'react-redux'
import SignUpMail from './mailsignup'
import GoogleAuth from './googleAuth'
import Or from './or'

const SignUp: React.FC = () => {

    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const isMail = useSelector((state: RootState) => state.auth.signUpMail);
    console.log(isMail);
    const dispatch = useDispatch()
    const handleMail = () => {
        dispatch(setSignUpMail(true));
    }
    return (
        <div >
            {
                !isMail ? (

                    <div className='flex flex-col  gap-8 '>
                        <GoogleAuth />
                        <Or />
                        <button onClick={handleMail} className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                            <Image src="/mail.png" alt="google icon" width={20} height={20} quality={80} />
                            <span>{t.continueWithMail}</span>
                        </button>
                    </div>

                ) : (
                    <div className='flex flex-col  gap-3 ' >
                        <SignUpMail />
                    </div>
                )
            }
        </div>
    )
}

export default SignUp
