// pages/contact.tsx
import { useState } from "react";

type FormState = { name: string; email: string; message: string; phone?: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "", phone: "" });
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary">Contact</h1>
      <p className="mt-2 text-gray-600">Send us a message or reach us directly via WhatsApp or email.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-white p-6 rounded-md shadow">
          <label className="block">Name<input required value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="mt-2 w-full border px-3 py-2 rounded" /></label>
          <label className="block mt-4">Email<input required value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="mt-2 w-full border px-3 py-2 rounded" type="email"/></label>
          <label className="block mt-4">Phone<input value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} className="mt-2 w-full border px-3 py-2 rounded" /></label>
          <label className="block mt-4">Message<textarea required value={form.message} onChange={e=>setForm({...form, message: e.target.value})} className="mt-2 w-full border px-3 py-2 rounded h-32"/></label>

          <div className="mt-4">
            <button className="bg-accent text-primary px-4 py-2 rounded font-semibold" type="submit">Send Message</button>
          </div>

          {status === "sending" && <p className="mt-3 text-sm text-gray-600">Sending...</p>}
          {status === "sent" && <p className="mt-3 text-sm text-green-600">Message sent. We'll get back to you.</p>}
          {status === "error" && <p className="mt-3 text-sm text-red-600">Error sending message. Try again later.</p>}
        </form>

        <div className="p-6">
          <h4 className="font-semibold">Direct Contact</h4>
          <p className="mt-2 text-gray-700">Email: <a href="mailto:realdataafrica@gmail.com" className="underline">realdataafrica@gmail.com</a></p>
          <p className="mt-1 text-gray-700">CEO: <a href="mailto:danstanvannevins@gmail.com" className="underline">danstanvannevins@gmail.com</a></p>
          <p className="mt-1 text-gray-700">WhatsApp: <a href="https://wa.me/254758412009" className="underline">+254 758 412009</a></p>

          <h4 className="font-semibold mt-6">Visit Us</h4>
          <p className="text-gray-700 mt-2">Nairobi (Private Bag). For meetings, please schedule ahead via email or WhatsApp.</p>
        </div>
      </div>
    </div>
  );
}
