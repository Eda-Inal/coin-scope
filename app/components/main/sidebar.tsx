import React, { useState } from 'react'
import Top from './top'
import Favourites from './favs'
import { getTranslation } from '@/app/utils/getTranslation'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { PiShootingStarFill } from "react-icons/pi";


const Sidebar: React.FC = () => {
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const [activeTab, setActiveTab] = useState<'top' | 'favourites'>('top');
    return (
        <div className="flex flex-col  h-full  ">
            {/* mobile, tablet */}
            <div className='w-full h-full border-b shadow-sm lg:hidden rounded-lg'>
                <div className='flex gap-2  px-2 h-[25px] '>
                    <div className='flex items-center gap-1'>
                    <HiMiniRocketLaunch color='#facc15'/>
                    <button onClick={() => setActiveTab('top')} className={` $font-semibold tracking-wider ${activeTab === 'top' ?  "text-primary":""}`}>
                        {t.trending}</button>
                    </div>
              
                    <div>|</div>
                    <div className='flex items-center gap-1'>
                    <PiShootingStarFill color='#9DD458'/>
                    <button onClick={() => setActiveTab('favourites')} className={`font-semibold tracking-wider ${activeTab !== 'top' ?  "text-primary":""}`}>
                        
                        {t.tracked}</button>
                    </div>
                   
                </div>

                <div className="  h-full mt-1 lg:hidden px-2 ">
                    {activeTab === 'top' ? <Top /> : <Favourites />}
                </div>
            </div>

            {/* big screens */}
            <div className='hidden w-full  lg:flex  h-full gap-3    '>
                <div className="  h-full w-1/2 border-b dark:border-gray-700   rounded-lg  px-2 shadow-lg border-t ">
                <div className='flex items-center gap-1'>
                <HiMiniRocketLaunch color='#facc15'/>
                <span className='font-semibold tracking-wider'>{t.trending}</span>
                </div>
                
                    <Top />
                </div>
                <div className=" h-full  w-1/2 rounded-lg px-2 border-b dark:border-gray-700 shadow-lg border-t  ">
                <div className='flex items-center gap-1'>
                    <PiShootingStarFill color='#9DD458'/>
                    <span className='h-[25px] font-semibold tracking-wider'>{t.tracked}</span>
                </div>
                    
                    <Favourites />
                </div>
            </div>


        </div>
    )
}

export default Sidebar

