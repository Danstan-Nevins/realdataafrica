// components/Team.tsx
import Image from "next/image";
import { motion } from "framer-motion";

const TEAM = [
  { name: "Danstan Gisore", role: "Founder & CEO", photo: "/images/team1.jpg" },
  { name: "Ruth Mtei", role: "Head of Gender & Inclusion", photo: "/images/team2.jpg" },
  { name: "Nyabuto Edwin", role: "Head of Finance", photo: "/images/team3.jpg" },
];

export default function Team() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold text-primary mb-6">Leadership</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {TEAM.map((t, i) => (
          <motion.div key={t.name} className="p-6 bg-white rounded-lg shadow-soft text-center"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden">
              <Image src={t.photo} alt={t.name} fill className="object-cover" />
            </div>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
            <div className="text-sm text-gray-600">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
