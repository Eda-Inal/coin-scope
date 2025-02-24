import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { setRandomPrices, Coin, setSelectedCoin } from '@/app/features/coinSlice';
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { getTranslation } from '@/app/utils/getTranslation';
import { db } from '@/firebaseConfig';
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { deleteDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

const Coins: React.FC = () => {
    const dispatch = useDispatch();
    const allCoins = useSelector((state: RootState) => state.coin.allCoins);
    const locale = useSelector((state: RootState) => state.language.locale);
    const t = getTranslation(locale);
    const [user, setUser] = useState<any>(null);


    const [favoriteCoins, setFavoriteCoins] = useState<string[]>([]);
    console.log("fav", favoriteCoins);


    useEffect(() => {
        dispatch(setRandomPrices());

    }, [dispatch]);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                if (currentUser.email) fetchFavoriteCoins(currentUser.email);
            } else {
                setUser(null);
                setFavoriteCoins([]);
            }
        });

        return () => unsubscribe();
    }, []);


    const fetchFavoriteCoins = async (userEmail: string) => {
        try {
            const favoritesRef = collection(db, "users", userEmail, "favorites");
            const querySnapshot = await getDocs(favoritesRef);


            const favoriteCoinsList = querySnapshot.docs.map(doc => doc.id);

            setFavoriteCoins(prevFavorites => {
                const updatedFavorites = [...prevFavorites, ...favoriteCoinsList];
                return Array.from(new Set(updatedFavorites));
            });
            return favoriteCoinsList;
        } catch (error) {
            console.error("Favori coinleri alırken hata oluştu:", error);
        }
    };

    const addFavoriteCoin = async (coin: Coin) => {
        if (!user || !user.email) return;

        try {
            const coinRef = doc(db, "users", user.email, "favorites", coin.name);
            await setDoc(coinRef, {
                price: coin.price,
                change: coin.change,
                name: coin.name,
            });

            setFavoriteCoins(prevFavorites => [...prevFavorites, coin.name]);
        } catch (error) {
            console.error("Favori eklerken hata oluştu:", error);
        }
    };

    const removeFavoriteCoin = async (coinName: string) => {
        if (!user || !user.email) return;
        try {
            const coinRef = doc(db, "users", user.email, "favorites", coinName);
            await deleteDoc(coinRef);

            setFavoriteCoins(prevFavorites => prevFavorites.filter(fav => fav !== coinName));
        } catch (error) {
            console.error("Favori çıkarırken hata oluştu:", error);
        }
    };
    const handleOpenModal = (coin: Coin) => {
        dispatch(setSelectedCoin(coin));
    };

    return (
        <div className='flex flex-col gap-2 h-full w-full mt-2 justify-between'>
            <div className="flex flex-row justify-between font-semibold p-2 border-b dark:border-b-gray-700">
                <div className="flex-[0.3]">⭐</div>
                <span className="flex-[0.3] text-left">#</span>
                <span className="w-8 h-8 rounded-full mr-4 sm:block hidden text-left"></span>
                <span className="flex-[1.2] text-left">{t.coin}</span>
                <span className="flex-[1.2] text-left">{t.price}</span>
                <span className="flex-[1.2] text-left">{t.coin24}%</span>
                <span className="flex-[2] text-left md:block hidden">{t.marketCap}</span>
                <span className="flex-[2] text-left lg:block hidden">{t.marketVolume}</span>
                <span className="flex-[2] text-left lg:block hidden">{t.marketCircling}</span>
                <span className="flex-[1] text-left lg:block hidden">{t.ath}</span>
                <span className="flex-[1] text-left lg:block hidden">{t.atl}</span>
                <span className="flex-[2] text-left sm:block hidden">{t.coinChart}</span>
            </div>

            {allCoins.map((coin, index) => {
                const isPositive = coin.change >= 0;
                const isFavorite = favoriteCoins.includes(coin.name);

                return (
                    <div
                        key={index}
                        className="flex flex-row justify-between items-center rounded-full text-sm py-3 bg-lightSecondary dark:bg-darkSecondary px-2 mt-1"
                    >
                        <div className="flex-[0.3] text-lg cursor-pointer">
                            {isFavorite ? (
                                <FaStar
                                    className="text-yellow-500"
                                    onClick={() => removeFavoriteCoin(coin.name)}
                                />
                            ) : (
                                <FaRegStar
                                    className="text-gray-400"
                                    onClick={() => {
                                        if (!user) {
                                            alert("Lütfen giriş yapın!");
                                            return;
                                        }
                                        addFavoriteCoin(coin);
                                    }}
                                />
                            )}
                        </div>
                        <span className="flex-[0.3] text-left">{index + 1}</span>
                        <span className="w-8 h-8 rounded-full mr-4 bg-pink-500 text-left sm:block hidden"></span>
                        <span onClick={() => handleOpenModal(coin)} className="flex-[1.2] cursor-pointer text-left">{coin.name}</span>
                        <span onClick={() => handleOpenModal(coin)} className="flex-[1.2] text-left cursor-pointer">{coin.price.toLocaleString()}</span>
                        <span onClick={() => handleOpenModal(coin)} className={`flex-[1.2] flex cursor-pointer items-center gap-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            {isPositive ? <FiArrowUp className="text-green-500" /> : <FiArrowDown className="text-red-500" />}
                            {coin.change}%
                        </span>
                        <span className="flex-[2] text-left md:block hidden">{coin.marketCap.toLocaleString()}</span>
                        <span className="flex-[2] text-left lg:block hidden">{coin.marketVolume.toLocaleString()}</span>
                        <span className="flex-[2] text-left lg:block hidden">{coin.circulatingSupply.toLocaleString()}</span>
                        <span className="flex-[1] text-left lg:block hidden">${coin.atl.toLocaleString()}</span>
                        <span className="flex-[1] text-left lg:block hidden">${coin.ath.toLocaleString()}</span>

                        <div className="flex-[2] text-left sm:block hidden">
                            <div className="h-8 w-full rounded-md"></div>
                        </div>
                    </div>
                );
            })}

            <button className='mx-auto mt-4 p-2 mb-5 w-[120px] border-2 rounded-full'>Load More</button>
        </div>
    );
}

export default Coins;
