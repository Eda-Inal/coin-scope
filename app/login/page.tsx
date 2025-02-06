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
    <div className='flex h-screen '>
      <div className='w-1/2 border-r h-full py-20'>
        <LoginLeft />
      </div>
      <div className='w-1/2 py-40 '>

        <div className='text-xl mb-8 w-72 mx-auto  '>
          {method === 'signin' || method === 'email' ? 'Sign in to CryptoTrack' : 'Sign up to CryptoTrack'}

        </div>
        <div className='w-72 max-w-md  mx-auto  '>
          {method === 'signin' && <EasyLogin />}
          {method === 'signup' && <SignUp />}
          {method === 'email' && <Mail />}
        </div>




        <div className='absolute top-12 right-8'>
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

