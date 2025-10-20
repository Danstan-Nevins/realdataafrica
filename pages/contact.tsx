import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`❌ ${data.error || 'Failed to send message'}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Network error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-6 text-[#07132A]"
      >
        Contact Us
      </motion.h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 border p-3 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 border p-3 rounded-md"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 border p-3 rounded-md h-32"
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="bg-[#06B6D4] text-white w-full py-3 rounded-md font-semibold"
        >
          Send Message
        </motion.button>
        <p className="text-center text-gray-600 mt-4">{status}</p>
      </form>
    </div>
  );
}
