import React, { useState } from 'react';
import Image from 'next/image';
import { RootState } from '../store';
import { getTranslation } from '../utils/getTranslation';
import { useSelector, useDispatch } from 'react-redux';
import { signInWithEmail } from '../services/authService';
import { setUser } from '../features/userSlice';
import { useRouter } from 'next/navigation';

const Mail: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /\S+@\S+\.\S+/;
        setEmailError(!emailRegex.test(email));
    };

    const validatePassword = (password: string) => {
        const passwordRegex = /(?=.*[A-Z]).{8,}/;
        setPasswordError(!passwordRegex.test(password));
    };

    const handleSignIn = async () => {
        validateEmail(email);
        validatePassword(password);

        if (emailError || passwordError) return;

        try {
            const user = await signInWithEmail(email, password);
            dispatch(
                setUser({
                    uid: user.uid,
                    email: user.email!,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                })
            );
            router.push("/");
        } catch (error: any) {
            console.log("Login Error:", error.message);
        }
    };

    return (
        <div className='flex flex-col gap-4'>

            <div className="relative w-72">
                <input
                    type="email"
                    placeholder={t.enterYourEmail}
                    className='w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                    }}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/mail.png" alt="Mail Icon" width={20} height={20} />
                </span>
            </div>
            <p className={`text-red-500 text-xs  h-4 ${emailError ? "visible" : "invisible"}`}>
                {t.mailError}
            </p>


            <div className="relative w-72">
                <input
                    type="password"
                    placeholder={t.enterYourPassword}
                    className='w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                    }}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/password.png" alt="Password Icon" width={20} height={20} />
                </span>
            </div>
            <p className={`text-red-500 text-xs h-4  mb-2 ${passwordError ? "visible" : "invisible"}`}>
                {t.passwordError}
            </p>

            <button onClick={handleSignIn} className='w-72 bg-primary hover:bg-sky-600 text-white px-4 py-3 rounded-full'>
                {t.signIn}
            </button>
        </div>
    );
};

export default Mail;
