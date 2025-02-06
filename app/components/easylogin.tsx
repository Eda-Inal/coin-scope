import React from 'react'
import Image from 'next/image'

const EasyLogin: React.FC = () => {
    return (
        <div className='flex flex-col justify-center gap-8'>

            <button className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                <Image src="/google.png" alt="google icon" width={20} height={20} quality={80} />
                <span>Continue with Google</span>
            </button>

            <button className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                <Image src="/mail.png" alt="google icon" width={20} height={20} quality={80} />
                <span>Continue with Mail</span>
            </button>


        </div>
    )
}

export default EasyLogin
