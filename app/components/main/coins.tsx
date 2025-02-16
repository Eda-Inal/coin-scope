import React from 'react';

const Coins: React.FC = () => {
    return (
        <div className='flex flex-col gap-2 h-full w-full mt-2 justify-between  '>


            <div className="flex flex-row justify-between font-semibold  py-2 border-b dark:border-b-gray-700">
                <div className="flex-[0.5]">⭐</div>
                <span className="flex-[0.5] text-left">#</span>
                <span className="flex-[1.2] text-left">Coin</span>
                <span className="flex-[1.2] text-left">Price</span>
                <span className="flex-[1.5] text-left">24h %</span>
                <span className="flex-[2] text-left md:block hidden">Market Volume</span>
                <span className="flex-[2] text-left md:block hidden">Market Cap</span>
                <span className="flex-[2] text-left md:block hidden">Circulating Supply</span>
                <span className="flex-[1] text-left md:block hidden">ATL</span>
                <span className="flex-[1] text-left md:block hidden">ATH</span>
                <span className="flex-[2] text-left sm:block hidden">Chart (7 days) </span>
            </div>


            {Array(15)
                .fill(null)
                .map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-row justify-between items-center rounded-full text-sm py-3 bg-lightSecondary dark:bg-darkSecondary px-2 mt-1 "
                    >
                        <div className="flex-[0.5]">⭐</div>
                        <span className="flex-[0.5] text-left">{index + 1}</span>
                        <span className="flex-[1.2] text-left">Coin</span>
                        <span className="flex-[1.2] text-left">Price: -</span>
                        <span className="flex-[1.5] text-left">24h %</span>
                        <span className="flex-[2] text-left md:block hidden">Market Volume -</span>
                        <span className="flex-[2] text-left md:block hidden">Market Cap -</span>
                        <span className="flex-[2] text-left md:block hidden">Circulating Supply -</span>
                        <span className="flex-[1] text-left md:block hidden">ATL -</span>
                        <span className="flex-[1] text-left md:block hidden">ATH -</span>


                        <div className="flex-[2] text-left sm:block hidden">
                            <div className="h-8 w-full  rounded-md"></div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Coins;
