import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/img/logo.svg" />
        <meta name="theme-color" content="#06092b" />
        <meta name="description" content="A simple project starter to work with Typescript, React, NextJS and Styled Components" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
