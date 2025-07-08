import { insertContactSchema } from '../shared/schema';
import { storage } from '../shared/storage';
import { z } from 'zod';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  try {
    const validatedData = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(validatedData);
    res.json({ success: true, message: 'Message sent successfully!', contact });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: 'Validation error', 
        errors: error.errors 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      });
    }
  }
} 