// pages/register.tsx
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", org: "", note: "" });
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", org: "", note: "" });
      } else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-primary">Register Interest</h1>
      <p className="mt-2 text-gray-600">Join our waitlist for pilots, demos and enterprise onboarding.</p>

      <form onSubmit={submit} className="mt-6 bg-white p-6 rounded shadow max-w-2xl">
        <label className="block">Name<input required value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="mt-2 w-full border px-3 py-2 rounded" /></label>
        <label className="block mt-4">Email<input required value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="mt-2 w-full border px-3 py-2 rounded" type="email"/></label>
        <label className="block mt-4">Organization<input value={form.org} onChange={e=>setForm({...form, org: e.target.value})} className="mt-2 w-full border px-3 py-2 rounded" /></label>
        <label className="block mt-4">Note<textarea value={form.note} onChange={e=>setForm({...form, note: e.target.value})} className="mt-2 w-full border px-3 py-2 rounded h-28" /></label>
        <div className="mt-4">
          <button className="bg-accent text-primary px-4 py-2 rounded font-semibold" type="submit">Register</button>
        </div>

        {status === "sending" && <p className="mt-3 text-sm">Sending...</p>}
        {status === "sent" && <p className="mt-3 text-sm text-green-600">Thanks — you are registered.</p>}
        {status === "error" && <p className="mt-3 text-sm text-red-600">Error. Try again later.</p>}
      </form>
    </div>
  );
}
