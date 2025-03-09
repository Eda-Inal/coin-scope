'use client'
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme";
import { RootState } from '@/app/store'
import { getTranslation } from '@/app/utils/getTranslation'
import { useSelector } from 'react-redux'

const ChangeTheme: React.FC = () => {
    const dispatch = useDispatch();
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const [localTheme, setLocalTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("theme") as "light" | "dark") || "dark";
        }
        return "dark";
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.classList.toggle("dark", localTheme === "dark");
            localStorage.setItem("theme", localTheme);
        }
    }, [localTheme]);

    const handleThemeChange = () => {
        const newTheme = localTheme === "light" ? "dark" : "light";
        setLocalTheme(newTheme);
        dispatch(toggleTheme());
    };

    return (
        <div className="flex items-center">
            <label htmlFor="theme-switch" className="sr-only">
                {t.changeTheme}
            </label>
            <div className="relative inline-block w-12 h-6">
                <input
                    type="checkbox"
                    checked={localTheme === "dark"}
                    onChange={handleThemeChange}
                    id="theme-switch"
                    className="peer appearance-none w-12 h-6 bg-gray-200  checked:border-gray-300 rounded-full cursor-pointer transition-colors duration-300"
                />
                <label
                    htmlFor="theme-switch"
                    className="absolute top-0 left-0 w-6 h-6 bg-primary rounded-full shadow-sm transition-transform duration-300 peer-checked:translate-x-6 cursor-pointer"
                ></label>
            </div>
        </div>
    );
};

export default ChangeTheme;

