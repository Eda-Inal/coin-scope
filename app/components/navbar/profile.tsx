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


        <div onClick={handleSignOut} className="bg-primary relative hover:bg-sky-600 text-white text-center px-4 py-1 w-28 rounded-md font-semibold cursor-pointer"

        >
            {t.signout}
        </div>



    )
}

export default Profile