import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  res.json({ 
    success: true, 
    downloadUrl: '/Milan_Savaliya_Resume.pdf',
    message: 'Resume download initiated' 
  });
} 