import type { Metadata } from "next";
import "./globals.css";
import { Onest, Noto_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Izzu Z. Fawwas - Software Engineer",
  description: "Hi folks. Let's get connected",
};

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${onest.variable} antialiased min-w-80`}
      >
        {children}
      </body>
    </html>
  );
}
