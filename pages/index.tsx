# Improved Cinematic Homepage for RealData Africa

Replace your current `pages/index.tsx` with this upgraded version.

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  LineChart,
  Globe2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/hero-skyscrapers.jpg"
          alt="Real Estate Skyline"
          fill
          priority
          className="object-cover scale-105 brightness-[0.45]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

        {/* Animated Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.18),transparent_30%)]"></div>

        <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.3em] text-accent text-sm md:text-base font-semibold"
            >
              Africa’s Future of Property Intelligence
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-white text-5xl md:text-7xl font-black leading-tight"
            >
              Cinematic Real Estate Intelligence
              <span className="block text-accent">
                Built For Africa
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
            >
              AI-powered property analytics, investment insights, urban
              intelligence, and smart infrastructure data helping developers,
              governments, investors, and real estate partners make faster,
              smarter decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/contact"
                className="group bg-accent hover:scale-105 transition-all duration-300 text-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/about"
                className="border border-white/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-xl text-white font-semibold"
              >
                Explore Platform
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-black text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-black text-accent">25+</h3>
            <p className="mt-2 text-gray-400">Urban Data Sources</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-accent">10X</h3>
            <p className="mt-2 text-gray-400">Faster Investment Insights</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-accent">AI</h3>
            <p className="mt-2 text-gray-400">Powered Forecasting</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-accent">24/7</h3>
            <p className="mt-2 text-gray-400">Real Estate Monitoring</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#0c0c0c] text-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.2em] text-accent font-semibold">
              Why RealData Africa
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">
              Premium Intelligence For Modern Real Estate
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Designed for investors, developers, governments, brokers, and
              infrastructure partners seeking next-generation African market
              intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
            >
              <Building2 className="w-10 h-10 text-accent" />
              <h3 className="mt-6 text-xl font-bold">
                Smart Property Analytics
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                AI-driven valuation models, housing trends, and predictive
                investment scoring.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
            >
              <LineChart className="w-10 h-10 text-accent" />
              <h3 className="mt-6 text-xl font-bold">
                Live Market Intelligence
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Dynamic dashboards, heatmaps, pricing trends, and location
                analytics.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
            >
              <Globe2 className="w-10 h-10 text-accent" />
              <h3 className="mt-6 text-xl font-bold">
                Urban Development Insights
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Infrastructure, sustainability, and city-growth intelligence
                tailored for Africa.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
            >
              <ShieldCheck className="w-10 h-10 text-accent" />
              <h3 className="mt-6 text-xl font-bold">
                Enterprise Grade Security
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Secure APIs, scalable architecture, and premium onboarding for
                institutional partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* CINEMATIC BANNER */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/images/hero-skyscrapers.jpg"
          alt="Luxury Property"
          fill
          className="object-cover brightness-[0.25]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black leading-tight"
          >
            Africa’s Real Estate Future
            <span className="block text-accent mt-2">
              Starts With Better Data
            </span>
          </motion.h2>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300 leading-relaxed">
            RealData Africa combines cinematic design, AI intelligence, and
            modern infrastructure to redefine how property ecosystems operate
            across emerging African markets.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 text-center border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Partner With The Future Of African Real Estate
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            Connect with RealData Africa for partnerships, enterprise access,
            smart-city collaborations, and premium property intelligence
            solutions.
          </p>

          <div className="mt-10 flex justify-center flex-wrap gap-4">
            <a
              href="/register"
              className="bg-accent hover:scale-105 transition-all duration-300 text-primary px-8 py-4 rounded-xl font-bold shadow-2xl"
            >
              Register Interest
            </a>

            <a
              href="/contact"
              className="border border-white/20 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-xl"
            >
              Contact Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
```

---

# IMPORTANT

You also need to install Lucide icons.

Run this in your terminal:

```bash
npm install lucide-react
```

---

# WHERE TO EDIT IN GITHUB

Go to:

```bash
pages/index.tsx
```

Delete the old code.

Paste the new code.

Commit changes.

---

# IMAGE REQUIREMENTS

Make sure this image exists:

```bash
public/images/hero-skyscrapers.jpg
```

Use a high-quality cinematic skyline image.

---

# OPTIONAL NEXT UPGRADES

Next you can add:

* animated statistics counters
* map visualizations
* luxury property cards
* AI chatbot assistant
* dark glassmorphism navbar
* video background hero
* scrolling parallax sections
* investor dashboard previews
* 3D hover effects

These would make the platform look world-class.
