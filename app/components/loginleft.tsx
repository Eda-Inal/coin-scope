import React from 'react'
import Image from 'next/image'

const LoginLeft: React.FC = () => {
    return (
        <div className='flex flex-col items-center gap-16'>
            <div>
                <Image src="/logincoin.png" alt="Crypto Coin" width={128} height={128} quality={80} />
            </div>
            <h1 className='text-3xl font-bold'>WELCOME TO <span className='text-primary'>CRYPTOTRACK</span></h1>


            <ul className='gap-10 flex flex-col text-lg'>
                <li>🔍 Track Real-Time Prices </li>
                <li>🔔  Custom Alerts</li>
                <li>🔒  Secure & Private </li>
            </ul>
        </div>
    )
}

export default LoginLeft