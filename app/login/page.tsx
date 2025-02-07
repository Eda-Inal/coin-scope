'use client'
import React from 'react';
import LoginLeft from '../components/loginleft';
import EasyLogin from '../components/easylogin';
import SignUp from '../components/signup';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthMethod } from '../features/authSlice';
import Mail from '../components/mail';

const LogIn: React.FC = () => {
  const dispatch = useDispatch();
  const method = useSelector((state: any) => state.auth.method);
  console.log(method);

  const handleSignUpClick = () => {
    dispatch(setAuthMethod('signup'));
  };

  const handleSignInClick = () => {
    dispatch(setAuthMethod('signin'));
  };


  return (
    <div className='flex relative '>
      <div className='w-1/2 border-r  py-12 hidden lg:block'>
        <LoginLeft />
      </div>
      <div className=' py-20 w-full lg:w-1/2 '>

        <div className='text-xl mb-8 w-72 mx-auto  '>
          {method === 'signin' || method === 'email' ? 'Sign in to CryptoTrack' : 'Sign up to CryptoTrack'}

        </div>
        <div className='w-72 max-w-md  mx-auto  '>
          {method === 'signin' && <EasyLogin />}
          {method === 'signup' && <SignUp />}
          {method === 'email' && <Mail />}
        </div>




        <div className='absolute top-4 right-8'>
          {method === 'signin' || method === 'email' ? (
            <>
              Don't you have an account?{' '}
              <span
                onClick={handleSignUpClick}
                className='underline cursor-pointer'
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                onClick={handleSignInClick}
                className='underline cursor-pointer'
              >
                Sign In
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;

