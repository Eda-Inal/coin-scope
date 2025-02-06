import React from 'react'
import LoginLeft from '../components/loginleft'
import EasyLogin from '../components/easylogin'

const LogIn: React.FC = () => {
  return (
    <div className='flex h-screen '>
      <div className='w-1/2 border-r h-full py-20 '>
        <LoginLeft />
      </div>
      <div className='w-1/2 py-20 '>
        <EasyLogin />
        <div className='absolute top-12 right-8 '>Don't you have an account? <span className='underline cursor-pointer'>Sign Up</span> </div>
      </div>


    </div>
  )
}

export default LogIn
