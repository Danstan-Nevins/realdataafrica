import type { AppProps } from "next/app";
import "../styles/globals.css";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>

      {/* Footer - visible on all pages */}
      <Footer />
    </div>
  );
}
