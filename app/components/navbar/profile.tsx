'use client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { showNotification } from '../../features/notifactionSlice';
import { RootState } from '../../store'
import { getTranslation } from '../../utils/getTranslation'
import { useSelector } from 'react-redux'


const Profile: React.FC = () => {
        const locale = useSelector((state: RootState) => state.language.locale);
        const t = getTranslation(locale);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            dispatch(logOut());
            dispatch(
                showNotification({
                    message: t.signOutToast,
                    type: 'success',
                })
            );
        } catch (error) {
            console.error("Sign-out failed:", error);
            dispatch(
                showNotification({
                    message: t.signOutError,
                    type: 'error',
                })
            );
        }
    };
    return (
        <div className="relative ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-1 w-28  border-b   hover:border-b hover:border-primary "
            >

                {t.profile}
            </button>
            {isOpen && (
                <ul className="absolute z-40  mt-1 w-28 flex flex-col items-start bg-lightBackground dark:bg-darkBackground   shadow-md rounded-sm left-1/2 transform -translate-x-1/2 text-sm ">
                    <li className="px-4 py-1 text-center cursor-pointer border-b hover:bg-lightSecondary  dark:hover:bg-darkSecondary gap-2  w-full"

                    >
                       {t.fav}
                    </li>
                    <li onClick={handleSignOut} className="px-4 py-1 text-center cursor-pointer hover:bg-lightSecondary   dark:hover:bg-darkSecondary gap-2  w-full"

                    >
                      {t.signout}
                    </li>

                </ul>
            )}
        </div>
    )
}

export default Profile