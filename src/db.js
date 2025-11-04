import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

const URL = process.env.DATABASE_URL;
const client = new MongoClient(URL);
dotenv.config();

let db;

export async function connectDB() {
    if (db) return db;

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db();
        return db;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}

export function getDB() {
    if (!db) {
        throw new Error('Database not connected. Call connectDB first.');
    }
    return db;
}