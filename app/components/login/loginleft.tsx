import React from 'react';

const LoginLeft: React.FC = () => {
    return (
        <div className="flex  overflow-hidden flex-col justify-start items-center  dark:bg-[linear-gradient(to_bottom,_#242424,_#3E5370)] bg-[linear-gradient(to_bottom,_#f8f8f8,_#A4C6F5)]  w-full  h-[calc(100vh-58px)] p-10">
            <h1 className="text-xl text-center mt-4 mb-4">
                Welcome to <span className="font-semibold">CryptoTrack</span>
            </h1>

            <div className="w-3/5">
                <img src="/crypto.svg" alt="Crypto Illustration" className="w-full h-auto" />
            </div>



        </div>
    );
};

export default LoginLeft;
