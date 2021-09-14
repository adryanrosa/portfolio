import Head from 'next/head';
import '../src/styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Open+Sans&display=swap" rel="stylesheet" />

        <title>Adryan Rosa | Portfolio</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;
