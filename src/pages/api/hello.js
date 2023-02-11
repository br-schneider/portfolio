import connectToDatabase from '@/lib/conectToDatabase'
// sole purpose is to connect to the database and return a response

export default async function handler(req, res) {
  try {
    await connectToDatabase()
    res.status(200).json({ warmedUp: true })
  } catch (error) {
    res.status(500).json({ error })
  }
}
