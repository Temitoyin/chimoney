import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Chimoney</title>
      <Head />
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
