import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adryan Rosa | Portfolio</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;
