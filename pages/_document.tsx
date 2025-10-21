// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Google Site Verification (Search Console) */}
        <meta
          name="google-site-verification"
          content="nNqYsX9Pcv_QdaYWAkaeKbwZ8RJ50NdqWphicoUX8as"
        />

        {/* ✅ Google Analytics (Global Site Tag) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0DD7VJMY0G"
        ></script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0DD7VJMY0G', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
