import React from 'react'
import Top from './top'
import Favourites from './favs'

const Sidebar: React.FC = () => {
    return (
        <div className="flex flex-col  h-full  ">
            {/* small devices */}
            <div className='w-full h-full bg-lightSecondary dark:bg-darkSecondary sm:hidden'>
                <div className='flex gap-2  px-2 '>
                    <button className='hover:text-primary'>Your Top</button>
                    <div>|</div>
                    <button className='hover:text-primary'>Favourites</button>
                </div>

                <div className="  h-full my-2 sm:hidden px-2 ">
                    <Top />
                </div>
            </div>

            {/* sm-md */}
            <div className='hidden w-full  sm:flex  h-full gap-3    '>
                <div className="  h-full w-1/2   rounded-md bg-lightSecondary dark:bg-darkSecondary px-2 ">
                    <Top />
                </div>
                <div className=" h-full  w-1/2 rounded-md bg-lightSecondary dark:bg-darkSecondary px-2  ">
                    <Favourites />
                </div>
            </div>


        </div>
    )
}

export default Sidebar

