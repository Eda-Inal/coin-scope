'use client'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { getTranslation } from "./utils/getTranslation";
import { showNotification } from "./features/notifactionSlice";
import Notification from "./components/notification";
import Sidebar from "./components/main/sidebar";
import Coins from "./components/main/coins";
import CoinModal from "./components/coinModal";
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const locale = useSelector((state: RootState) => state.language.locale);
  const t = getTranslation(locale);

  const triggerNotification = () => {
    dispatch(
      showNotification({
        message: t.signInToast,
        type: 'success',
      })
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      triggerNotification();
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div className="lg:mx-6 mx-2 flex  flex-col min-h-screen py-3  ">

      <div className="w-full  h-[235px] ">
        <Sidebar />
      </div>
      <div className="w-full mt-4  ">
        <Coins />
      </div>
      <CoinModal />
      <Notification />

    </div>
  );
};

export default Home;
