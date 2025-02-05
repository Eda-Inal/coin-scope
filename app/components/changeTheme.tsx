import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleTheme } from "../features/theme";
const ChangeTheme: React.FC = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.theme.mode);

    const handleThemeChange = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className="flex items-center">
            <div className="relative inline-block w-12 h-6">
                <input
                    type="checkbox"
                    checked={mode === 'dark'}
                    onChange={handleThemeChange}
                    id="theme-switch"
                    className="peer appearance-none w-12 h-6 bg-gray-200  checked:bg-gray-800 checked:border-gray-300 checked:border rounded-full cursor-pointer transition-colors duration-300"
                />
                <label
                    htmlFor="theme-switch"
                    className="absolute top-0 left-0 w-6 h-6 bg-blue-500 rounded-full border border-gray-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 cursor-pointer"
                ></label>
            </div>
        </div>
    );
};

export default ChangeTheme;

