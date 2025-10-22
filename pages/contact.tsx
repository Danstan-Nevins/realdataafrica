import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch with <span className="text-blue-400">RealData Africa</span>
      </motion.h1>

      <motion.div
        className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 shadow-lg w-full max-w-lg space-y-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="text-gray-300 text-lg">
          We’d love to hear from you. Reach out to us anytime via email, WhatsApp, or Facebook.
        </p>

        <div className="flex flex-col gap-4 items-center mt-6">
          {/* Email */}
          <a
            href="mailto:realdataafrica@gmail.com"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-medium"
          >
            <FaEnvelope size={22} />
            realdataafrica@gmail.com
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254758412009"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full text-white font-medium"
          >
            <FaWhatsapp size={22} />
            +254 758 412009
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/NevinsVanSten"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-800 hover:bg-blue-900 transition px-6 py-3 rounded-full text-white font-medium"
          >
            <FaFacebook size={22} />
            Nevins Van Sten
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          © 2025 RealData Africa — Connecting data, people, and progress.
        </p>
      </motion.div>
    </div>
  );
}
