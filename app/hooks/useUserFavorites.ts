import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import { collection, onSnapshot, doc, setDoc, deleteDoc } from "firebase/firestore";

export const useUserFavorites = () => {
    const [user, setUser] = useState<{ email: string } | null>(null);
    const [favoriteCoins, setFavoriteCoins] = useState<string[]>([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser.email) {
                setUser({ email: currentUser.email });
            } else {
                setUser(null);
                setFavoriteCoins([]);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            const favoritesRef = collection(db, "users", user.email, "favorites");
            const unsubscribe = onSnapshot(favoritesRef, (querySnapshot) => {
                const newFavoriteCoins = querySnapshot.docs.map(doc => doc.id);
                setFavoriteCoins(newFavoriteCoins);  // firestore'dan gelen favorileri set et
            });

            return () => unsubscribe();  
        }
    }, [user]);  // user değiştiğinde favori coin'leri dinliyor

    const addFavoriteCoin = async (coin: { name: string; price: number; change: number }) => {
        if (!user) return;
        try {
            const coinRef = doc(db, "users", user.email, "favorites", coin.name);
            await setDoc(coinRef, { price: coin.price, change: coin.change, name: coin.name });
        } catch (error) {
            console.error("error adding coins in favorite", error);
        }
    };

    const removeFavoriteCoin = async (coinName: string) => {
        if (!user) return;
        try {
            const coinRef = doc(db, "users", user.email, "favorites", coinName);
            await deleteDoc(coinRef);
        } catch (error) {
            console.error("error removing coins from favorite", error);
        }
    };

    return { user, favoriteCoins, addFavoriteCoin, removeFavoriteCoin };
};
