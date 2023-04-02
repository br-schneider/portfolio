import { MongoClient } from 'mongodb'

export default async function connectToDatabase() {
  const uri = process.env.MONGO_URI

  let cachedDb = null
  if (cachedDb) {
    return cachedDb
  }

  if (!uri) {
    throw new Error(
      'Please define the MONGO_URI environment variable inside .env.local'
    )
  }

  // Connect to our MongoDB database hosted on MongoDB Atlas
  const client = await MongoClient.connect(uri)

  // Specify which database we want to use
  const db = client.db(process.env.DATABASE_NAME)

  cachedDb = db
  return db
}
