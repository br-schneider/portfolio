// sole purpose is to connect to the database and return a response
import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '@/lib/conectToDatabase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectToDatabase()
    res.status(200).json({ warmedUp: true })
  } catch (error) {
    res.status(500).json({ error })
  }
}
