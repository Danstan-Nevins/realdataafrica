import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullName, email, phone, message } = req.body;
    if (!fullName || !email || !phone)
      return res.status(400).json({ error: 'Missing required fields' });

    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'messages.json');

    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
    const existing = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
      : [];

    existing.push({
      fullName,
      email,
      phone,
      message,
      date: new Date().toISOString()
    });

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    return res.status(200).json({ message: 'Registration successful!' });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
