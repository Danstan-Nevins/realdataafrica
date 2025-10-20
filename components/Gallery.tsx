// components/Gallery.tsx
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  "/images/sky1.jpg",
  "/images/sky2.jpg",
  "/images/house1.jpg",
  "/images/house2.jpg",
  "/images/sky3.jpg",
  "/images/house3.jpg",
  "/images/sky4.jpg",
  "/images/sky5.jpg",
];

export default function Gallery() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-primary mb-4">Gallery — Skylines & Smart Homes</h2>
      <p className="text-gray-600 mb-6 max-w-2xl">A curated showcase of modern architecture, smart homes and urban skylines across Africa.</p>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4 snap-x snap-mandatory">
        {IMAGES.map((src, i) => (
          <motion.div
            key={src}
            className="relative min-w-[260px] md:min-w-[340px] h-64 rounded-xl overflow-hidden snap-center shadow-soft"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
