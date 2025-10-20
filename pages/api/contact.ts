import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: 'Missing required fields' });

    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'messages.json');

    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
    const currentData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
      : [];

    currentData.push({ name, email, message, date: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));

    return res.status(200).json({ message: 'Message saved successfully!' });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
