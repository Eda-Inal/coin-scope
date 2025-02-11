import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { getTranslation } from '../utils/getTranslation';
import { signUpWithEmail } from '../services/authService';
import { setUser, setWarning } from '../features/userSlice';

const SignUpMail: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError(true);
            dispatch(setWarning("mailError"));
            return false;
        }
        setEmailError(false);
        dispatch(setWarning(null));
        return true; // 
    };

    const validatePassword = (password: string) => {
        const passwordRegex = /(?=.*[A-Z]).{8,}/;
        if (!passwordRegex.test(password)) {
            setPasswordError(true);
            dispatch(setWarning("passwordError"));
            return false;
        }
        setPasswordError(false);
        return true;
    };

    const validateConfirmPassword = (confirmPassword: string) => {
        if (confirmPassword !== password) {
            setPasswordMatchError(true);
            dispatch(setWarning("passwordMatchError"));
            return false;
        }
        setPasswordMatchError(false);
        return true;
    };

    const handleSignUp = async () => {

        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);


        if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
            return;
        }

        try {
            const user = await signUpWithEmail(email, password);
            dispatch(
                setUser({
                    uid: user.uid,
                    email: user.email!,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                })
            );

            router.push("/");
        } catch (error) {
            dispatch(setWarning("registerFail"));
        }
    };

    return (
        <>
            <div className="relative w-72">
                <input
                    type="email"
                    placeholder={t.enterYourEmail}
                    className={`w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10 
                        ${emailError ? "border-2 border-red-500 " : ""}`}
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
                    className={`w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10
                        ${passwordError || passwordMatchError ? "border-2 border-red-500" : ""}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/password.png" alt="Password Icon" width={20} height={20} />
                </span>
            </div>

            <div className="relative w-72">
                <input
                    type="password"
                    placeholder={t.confirmYourPassword}
                    className={`w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10
                        ${passwordError || passwordMatchError ? "border-2 border-red-500" : ""}`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/password.png" alt="Password Icon" width={20} height={20} />
                </span>
            </div>

            <button onClick={handleSignUp} className='w-72 bg-primary hover:bg-sky-600 text-white px-4 py-3 rounded-full'>
                {t.signUp}
            </button>
        </>
    );
};

export default SignUpMail;
