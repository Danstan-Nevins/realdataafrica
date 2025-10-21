import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ SEO Meta */}
        <meta name="description" content="RealData Africa — AI-powered real estate intelligence transforming property data into actionable insights across Africa." />
        <meta name="keywords" content="Real Estate, Smart Homes, Data Analytics, Africa, RealData Africa, Property Insights" />
        <meta name="author" content="RealData Africa Team" />

        {/* ✅ Google Site Verification */}
        <meta name="google-site-verification" content="nNqYsX9Pcv_QdaYWAkaeKbwZ8RJ50NdqWphicoUX8as" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Google Analytics (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0DD7VJMY0G"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0DD7VJMY0G');
            `,
          }}
        />
      </Head>

      <body className="bg-gray-50 text-gray-900 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
