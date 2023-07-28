import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const fontLink = 'https://fonts.googleapis.com/css2?family=Caveat&family=Pangolin&display=swap';
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={fontLink}
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
