import React from "react";
import { FaSearch } from "react-icons/fa";
import { setSearchQuery } from "../features/coinSlice";
import { useDispatch } from "react-redux";

const Search: React.FC = () => {
    const dispatch = useDispatch();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value));
    };
    return (
        <div className="relative w-full ">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 " size={16} />
            <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:ring-0  shadow-sm dark:bg-darkBackground bg-lightBackground"
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;
