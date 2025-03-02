'use client'
import { Roboto } from "next/font/google";
import "./globals.css";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { RootState } from "./store";
import Navbar from "./components/navbar/navbar";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <Provider store={store}>
      <ThemeLayout>
        {children}
      </ThemeLayout>
    </Provider>
  );
}

const ThemeLayout = ({ children }: { children: React.ReactNode }) => {

  const mode = useSelector((state: RootState) => state.theme.mode);
  const locale = useSelector((state: RootState) => state.language.locale);

  return (
    <html lang="en" className={mode === "dark" ? "dark" : ""}>
         <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="A cryptocurrency app for tracking coins." />
        <meta name="theme-color" content={mode === "dark" ? "#333" : "#fff"} />
        <link rel="icon" href="/coin.png" />
        <title>CryptoTrack</title>
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <Navbar />
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
};

