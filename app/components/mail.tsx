import React, { useState } from 'react';
import Image from 'next/image';
import { RootState } from '../store';
import { getTranslation } from '../utils/getTranslation';
import { useSelector, useDispatch } from 'react-redux';
import { signInWithEmail } from '../services/authService';
import { setUser, setWarning } from '../features/userSlice';
import { useRouter } from 'next/navigation';

const Mail: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const warning = useSelector((state: RootState) => state.user.warning);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };

    const handleSignIn = async () => {
        if (!validateEmail(email)) {
            setEmailError(true);
            dispatch(setWarning("mailError"));
            return;
        }

        setEmailError(false);
        dispatch(setWarning(null));

        try {
            const user = await signInWithEmail(email, password);
            dispatch(setUser({
                uid: user.uid,
                email: user.email!,
                displayName: user.displayName,
                photoURL: user.photoURL,
            }));
            router.push("/");
        } catch (error: any) {
            dispatch(setWarning("userError"));
        }
    };

    return (
        <div className='flex flex-col gap-8'>
            <div className="relative w-72">
                <input
                    type="email"
                    placeholder={t.enterYourEmail}
                    className={`w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10 border ${emailError ? 'border-red-500 border-2' : 'border-transparent'}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/mail.png" alt="Mail Icon" width={20} height={20} />
                </span>
            </div>

            <div className="relative w-72">
                <input
                    type="password"
                    placeholder={t.enterYourPassword}
                    className='w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/password.png" alt="Password Icon" width={20} height={20} />
                </span>
            </div>

            <button onClick={handleSignIn} className='w-72 bg-primary hover:bg-sky-600 text-white px-4 py-3 rounded-full'>
                {t.signIn}
            </button>


        </div>
    );
};

export default Mail;
