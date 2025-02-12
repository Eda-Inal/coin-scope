import React from 'react'
import Image from 'next/image'
import { RootState } from '../../store'
import { getTranslation } from '../../utils/getTranslation'
import { useSelector } from 'react-redux'
import { signInWithGoogle } from '../../services/authService'
import { setUser } from '../../features/userSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation';

const GoogleAuth: React.FC = () => {

    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const dispatch = useDispatch()
    const router = useRouter();
    const handleGoogleClick = async () => {
        try {
            const user = await signInWithGoogle();
            if (user) {
                dispatch(setUser({
                    uid: user.uid,
                    email: user.email!,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                }));
                console.log("Sign in with google is success!");
                router.push("/");
            }
        } catch (error) {
            console.error("Sign is not success!:", error);
        }
    };
    return (
        <>
            <button onClick={handleGoogleClick} className='w-72 dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full flex items-center gap-6'>
                <Image src="/google.png" alt="google icon" width={20} height={20} quality={80} />
                <span>{t.continueWithGoogle}</span>
            </button>
        </>
    )
}

export default GoogleAuth
