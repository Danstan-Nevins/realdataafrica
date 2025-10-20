import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Ensure data directory exists
      const dirPath = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }

      const filePath = path.join(dirPath, 'messages.json');

      // Read existing messages or start with empty array
      const existingData = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        : [];

      // Add new message
      existingData.push({
        name,
        email,
        message,
        date: new Date().toISOString(),
      });

      // Write updated data
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

      return res.status(200).json({ success: true, message: 'Message received successfully!' });
    } catch (error) {
      console.error('Error saving message:', error);
      return res.status(500).json({ error: 'Failed to save message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
