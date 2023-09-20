import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Proof of Funds" />
        <meta
          name="description"
          content="Listados de exchanges argentinos de criptomonedas y sus informes de transparencia."
        />

        {/* <!-- Open Graph / Facebook --/> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proof-of-funds.vercel.app" />
        <meta property="og:title" content="Proof of Funds" />
        <meta
          property="og:description"
          content="Listados de exchanges argentinos de criptomonedas y sus informes de transparencia."
        />
        <meta
          property="og:image"
          content="https://proof-of-funds.vercel.app/img/preview.png"
        />

        <meta
          name="theme-color"
          content="#fff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#111"
          media="(prefers-color-scheme: dark)"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://proof-of-funds.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Proof of Funds" />
        <meta
          property="og:description"
          content="Listados de exchanges argentinos de criptomonedas y sus informes de transparencia."
        />
        <meta
          property="og:image"
          content="https://proof-of-funds.vercel.app/img/preview.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="proof-of-funds.vercel.app" />
        <meta
          property="twitter:url"
          content="https://proof-of-funds.vercel.app/"
        />
        <meta name="twitter:title" content="Proof of Funds" />
        <meta
          name="twitter:description"
          content="Listados de exchanges argentinos de criptomonedas y sus informes de transparencia."
        />
        <meta
          name="twitter:image"
          content="https://proof-of-funds.vercel.app/img/preview.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="bg-black text-[#CECECE]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
