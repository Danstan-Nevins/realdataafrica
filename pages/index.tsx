// pages/index.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh]">
        <Image src="/images/hero-skyscrapers.jpg" alt="skyscrapers" fill className="object-cover brightness-75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            RealData Africa
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 text-lg max-w-2xl">
            AI-driven property intelligence powering investment, planning and policy across Africa.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 flex gap-4">
            <a href="/contact" className="bg-accent px-6 py-3 rounded-md font-semibold text-primary">Get in touch</a>
            <a href="/about" className="border border-white/40 px-6 py-3 rounded-md">Learn more</a>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-md shadow-soft">
            <h4 className="font-semibold">AI-Powered Analytics</h4>
            <p className="mt-2 text-sm text-gray-600">Predictive valuations, risk scoring & trend forecasts.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-soft">
            <h4 className="font-semibold">Interactive Dashboards</h4>
            <p className="mt-2 text-sm text-gray-600">Visualize heatmaps and investment hotspots.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow-soft">
            <h4 className="font-semibold">Enterprise Integrations</h4>
            <p className="mt-2 text-sm text-gray-600">APIs, SSO, white-glove onboarding for partners.</p>
          </div>
        </div>
      </section>

      {/* GALLERY (component) */}
      <Gallery />

      {/* CTA */}
      <section className="bg-primary text-white py-14 text-center">
        <h3 className="text-2xl font-bold">Partner with RealData Africa</h3>
        <p className="max-w-2xl mx-auto mt-3 text-gray-200">Contact us for pilot programs, API access, and enterprise licensing.</p>
        <div className="mt-6">
          <a href="/register" className="bg-accent text-primary px-6 py-3 rounded-md font-semibold">Register Interest</a>
        </div>
      </section>
    </>
  );
}
