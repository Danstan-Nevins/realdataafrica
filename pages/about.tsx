// pages/about.tsx
import Team from "../components/Team";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold text-primary">About RealData Africa</motion.h1>

      <section className="mt-6 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="mt-2 text-gray-700">To make property intelligence reliable and accessible across Africa, empowering decision makers with accurate, timely and actionable insights.</p>

          <h3 className="text-xl font-semibold mt-6">Our Vision</h3>
          <p className="mt-2 text-gray-700">A future where data and technology guide sustainable urban growth, investment and housing solutions across the continent.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">What We Do</h3>
          <p className="mt-2 text-gray-700">We collect, clean and analyze fragmented property and transaction data, provide predictive models, dashboards and APIs to institutions, developers, and governments.</p>
        </div>
      </section>

      <Team />
    </div>
  );
}
