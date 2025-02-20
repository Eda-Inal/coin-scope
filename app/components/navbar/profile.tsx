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
import { setLogoutFavorites } from '@/app/features/coinSlice';


const Profile: React.FC = () => {
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const dispatch = useDispatch();

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
            dispatch(setLogoutFavorites());
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
   
                    <div onClick={handleSignOut} className="bg-primary hover:bg-sky-600 text-white text-center px-4 py-1 w-28 rounded-md font-semibold cursor-pointer"

                    >
                      {t.signout}
                    </div>

          
        </div>
    )
}

export default Profile