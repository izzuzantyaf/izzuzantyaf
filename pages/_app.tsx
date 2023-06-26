import { AppProps } from "next/app";
import "../styles/global.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const heebo = Inter({
  subsets: ["latin"],
  variable: "--font-heebo",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={`${heebo.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}

export default MyApp;
