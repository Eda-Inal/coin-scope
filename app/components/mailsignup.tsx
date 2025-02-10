import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { getTranslation } from '../utils/getTranslation';
import { signUpWithEmail } from '../services/authService';
import { setUser } from '../features/userSlice';

const SignUpMail: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validateEmail = (email: string) => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError("Enter a valid email");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (password: string) => {
        const passwordRegex = /(?=.*[A-Z]).{8,}/;
        if (!passwordRegex.test(password)) {
            setPasswordError("Password must be at least 8 characters long and contain one uppercase letter");
        } else {
            setPasswordError("");
        }
    };

    const validateConfirmPassword = (confirmPassword: string) => {
        if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords do not match!");
        } else {
            setConfirmPasswordError("");
        }
    };

    const handleSignUp = async () => {
        validateEmail(email);
        validatePassword(password);
        validateConfirmPassword(confirmPassword);

        if (emailError || passwordError || confirmPasswordError) return;

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
            setEmailError("Register fail, please try again.");
            console.log(emailError);
            
        }
    };

    return (
        <>
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
            <p className={`text-red-500 text-xs   ${emailError ? "visible" : "invisible"}`}>
                {t.mailError || "Boş"}
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
            <p className={`text-red-500 text-xs   ${passwordError ? "visible" : "invisible"}`}>
                {t.passwordError || "Boş"}
            </p>

            <div className="relative w-72">
                <input
                    type="password"
                    placeholder={t.confirmYourPassword}
                    className='w-full dark:bg-darkSecondary bg-lightSecondary px-4 py-3 rounded-full pl-10'
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        validateConfirmPassword(e.target.value);
                    }}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Image src="/password.png" alt="Password Icon" width={20} height={20} />
                </span>

            </div>
            <p className={`text-red-500 text-xs   ${confirmPasswordError ? "visible" : "invisible"}`}>
                {t.passwordMatchError || "Boş"}
            </p>

            <button onClick={handleSignUp} className='w-72 bg-primary hover:bg-sky-600 text-white px-4 py-3 rounded-full'>
                {t.signUp}
            </button>
        </>
    );
};

export default SignUpMail;



