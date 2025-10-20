// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

type Contact = { name: string; email: string; phone?: string; message: string; createdAt: string };

const DATA_FILE = path.join(process.cwd(), "data", "messages.json");

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify([]), "utf8");
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  const list: Contact[] = JSON.parse(raw || "[]");
  const entry: Contact = { name, email, phone, message, createdAt: new Date().toISOString() };
  list.unshift(entry);
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");

  return res.status(200).json({ ok: true });
}
