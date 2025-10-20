// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

type Reg = { name: string; email: string; org?: string; note?: string; createdAt: string };

const DATA_FILE = path.join(process.cwd(), "data", "registrations.json");

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

  const { name, email, org, note } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Missing fields" });

  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  const list: Reg[] = JSON.parse(raw || "[]");
  const entry: Reg = { name, email, org, note, createdAt: new Date().toISOString() };
  list.unshift(entry);
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");

  return res.status(200).json({ ok: true });
}
