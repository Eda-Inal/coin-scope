import React from 'react'
import LoginLeft from '../components/loginleft'
import LoginRight from '../components/loginrigth'

const LogIn: React.FC = () => {
  return (
    <div className='flex h-screen '>
      <div className='w-1/2 border-r h-full py-20 '>
        <LoginLeft />
      </div>
      <div className='w-1/2 py-12 '>
        <LoginRight />
      </div>


    </div>
  )
}

export default LogIn
