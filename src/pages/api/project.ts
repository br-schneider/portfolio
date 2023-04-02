import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '@/lib/conectToDatabase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase()
      const collection = db.collection('blog')

      const projects = await collection.find({}).toArray()
      res.status(200).json({ projects })
    } catch (error) {
      res.status(500).json({ error })
    }
  }
}
