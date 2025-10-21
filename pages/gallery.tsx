import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    '/images/sky1.jpg',
    '/images/sky2.jpg',
    '/images/sky3.jpg',
    '/images/sky4.jpg',
    '/images/sky5.jpg',
    '/images/house1.jpg',
    '/images/house2.jpg',
    '/images/house3.jpg'
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-center py-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-[#07132A] mb-6"
      >
        Our Gallery
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              width={500}
              height={400}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
