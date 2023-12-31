import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#54982f" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body>
          {/* <!-- Google tag (gtag.js) --> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-8CLVJELB2X"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8CLVJELB2X');
            `}
          </Script>
          <Analytics />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
