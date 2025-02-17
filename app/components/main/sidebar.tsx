import React, { useState } from 'react'
import Top from './top'
import Favourites from './favs'
import { getTranslation } from '@/app/utils/getTranslation'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'


const Sidebar: React.FC = () => {
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const [activeTab, setActiveTab] = useState<'top' | 'favourites'>('favourites');
    return (
        <div className="flex flex-col  h-full  ">
            {/* mobile, tablet */}
            <div className='w-full h-full border-b shadow-sm lg:hidden rounded-lg'>
                <div className='flex gap-2  px-2 h-[25px] '>
                    <button onClick={() => setActiveTab('top')} className='hover:text-primary'>{t.top5}</button>
                    <div>|</div>
                    <button onClick={() => setActiveTab('favourites')} className='hover:text-primary'>{t.tracked}</button>
                </div>

                <div className="  h-full mt-1 lg:hidden px-2 ">
                    {activeTab === 'top' ? <Top /> : <Favourites />}
                </div>
            </div>

            {/* big screens */}
            <div className='hidden w-full  lg:flex  h-full gap-3    '>
                <div className="  h-full w-1/2 border-b dark:border-gray-700   rounded-lg  px-2 shadow-lg border-t ">
                    <div>{t.top5}</div>
                    <Top />
                </div>
                <div className=" h-full  w-1/2 rounded-lg px-2 border-b dark:border-gray-700 shadow-lg border-t  ">
                    <div className='h-[25px]'>{t.tracked}</div>
                    <Favourites />
                </div>
            </div>


        </div>
    )
}

export default Sidebar

