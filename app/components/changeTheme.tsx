import React, { useState } from "react";

const ChangeTheme: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    const handleThemeChange = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="flex items-center">
            <div className="relative inline-block w-12 h-6">
                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={handleThemeChange}
                    id="theme-switch"
                    className="peer appearance-none w-12 h-6 bg-gray-200 checked:bg-gray-800 rounded-full cursor-pointer transition-colors duration-300"
                />
                <label
                    htmlFor="theme-switch"
                    className="absolute top-0 left-0 w-6 h-6 bg-white rounded-full border border-gray-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 "
                ></label>
            </div>
        </div>
    );
};

export default ChangeTheme;

