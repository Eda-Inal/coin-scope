'use client'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { getTranslation } from "./utils/getTranslation";
import { showNotification } from "./features/notifactionSlice";
import Notification from "./components/notification";

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
    <div>
      <h1 className="text-2xl font-bold">{t.welcome}</h1>
      <Notification />


    </div>
  );
};

export default Home;
