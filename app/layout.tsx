import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});



export const metadata: Metadata = {
  title: "Coin Scope",
  description: "Track and analyze top cryptocurrency trends, market data, and live updates on your favorite coins.",
};

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
        {children}
      </body>
    </html>
  );
}
