'use client'
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store";

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
    <html lang="en">
      <body
        className={`${roboto.variable}  antialiased`}
      >
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
