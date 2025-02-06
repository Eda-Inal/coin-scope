'use client'
import React from 'react';
import LoginLeft from '../components/loginleft';
import EasyLogin from '../components/easylogin';
import SignUp from '../components/signup';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthMethod } from '../features/authSlice';

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
    <div className='flex h-screen'>
      <div className='w-1/2 border-r h-full py-20'>
        <LoginLeft />
      </div>
      <div className='w-1/2 py-20'>
        {method === 'signin' && <EasyLogin />}
        {method === 'signup' && <SignUp />}
        
      
        <div className='absolute top-12 right-8'>
          {method === 'signin' ? (
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

