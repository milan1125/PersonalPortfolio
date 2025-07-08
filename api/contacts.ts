import { storage } from '../shared/storage';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  try {
    const contacts = await storage.getContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch contacts' 
    });
  }
} 