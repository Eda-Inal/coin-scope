'use client'
import React from "react";
import Navbar from "./components/navbar";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { getTranslation } from "./utils/getTranslation";

const Home: React.FC = () => {
  const locale = useSelector((state: RootState) => state.language.locale);
  const t = getTranslation(locale);
  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="text-2xl font-bold">{t.welcome}</h1>

    </div>
  );
};

export default Home;
