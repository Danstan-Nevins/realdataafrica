// components/Layout.tsx
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>RealData Africa — Property Intelligence</title>
        <meta name="description" content="RealData Africa delivers AI-powered property intelligence across Africa." />
        <meta property="og:title" content="RealData Africa — Property Intelligence" />
        <meta property="og:description" content="AI-driven property analytics, maps, and dashboards for Africa." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
