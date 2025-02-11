'use client'
import React from 'react';
import LoginLeft from '../components/loginleft';
import EasyLogin from '../components/easylogin';
import SignUp from '../components/signup';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthMethod } from '../features/authSlice';
import Mail from '../components/mail';
import { RootState } from '../store';
import { getTranslation } from '../utils/getTranslation';
import { setSignUpMail } from '../features/authSlice';
import { setWarning } from '../features/userSlice';

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const method = useSelector((state: any) => state.auth.method);
  console.log(method);
  const locale = useSelector((state: RootState) => state.language.locale);
  const t = getTranslation(locale);
  const warning = useSelector((state: RootState) => state.user.warning);

  const handleSignUpClick = () => {
    dispatch(setAuthMethod('signup'));
    dispatch(setWarning(null))
  };

  const handleSignInClick = () => {
    dispatch(setAuthMethod('signin'));
    dispatch(setSignUpMail(false))
    dispatch(setWarning(null))
  };



  return (
    <div className='flex relative  '>
      <div className='w-1/2  hidden lg:block'>
        <LoginLeft />
      </div>
      <div className=' py-20 w-full lg:w-1/2 '>

        <div className=' mb-6 w-72 mx-auto'>

          {method === 'signin' || method === 'email' ? t.signInTitle : t.signUpTitle}

        </div>
        <div className='w-72 max-w-md  mx-auto  '>
          {method === 'signin' && <EasyLogin />}
          {method === 'signup' && <SignUp />}
          {method === 'email' && <Mail />}
          <div className=' text-sm mt-6'>
            {method === 'signin' || method === 'email' ? (
              <>
                {t.noAccountMessage}{' '}
                <span
                  onClick={handleSignUpClick}
                  className='underline cursor-pointer'
                >
                  {t.signUpLink}
                </span>
              </>
            ) : (
              <>
                {t.haveAccountMessage}{' '}
                <span
                  onClick={handleSignInClick}
                  className='underline cursor-pointer'
                >
                  {t.signInLink}
                </span>
              </>
            )}
             {warning && <p className="text-red-500 mt-6">{t[warning]}</p>}
          </div>
        </div>





      </div>
    </div>
  );
};

export default LogIn;

