'use client'
import { Roboto } from "next/font/google";
import "./globals.css";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import { RootState } from "./store";

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

  return (
    <html lang="en" className={mode === "dark" ? "dark" : ""}>
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
};

