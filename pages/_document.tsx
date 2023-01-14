import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="description" content="Izzu's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="text-gray-800 bg-gray-50 lg:text-lg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
