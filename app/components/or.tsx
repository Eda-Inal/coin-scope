import React from 'react'
import { RootState } from '../store'
import { getTranslation } from '../utils/getTranslation'
import { useSelector } from 'react-redux'

const Or: React.FC = () => {
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    return (
        <>

            <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="px-2 text-gray-500 dark:text-gray-400 text-sm">{t.or}</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            </div>

        </>

    )
}

export default Or
