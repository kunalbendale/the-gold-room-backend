import mongoose from 'mongoose';

const MONGO_URI: string = process.env.MONGO_URI;

export const connectDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URI);

        console.log("✅ MongoDB connected");

        mongoose.connection.on("error", (err) => {
            console.error("❌ MongoDB connection error:", err);
        });
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        process.exit(1);
    }
};

export const initCollections = async (): Promise<void> => {
    const db = mongoose.connection.db;

    if (!db) return;

    const collections = await db.listCollections({ name: "users" }).toArray();

    if (collections.length === 0) {
        await db.createCollection("users");
        console.log("Users collection created");
    } else {
        console.log("Users collection already exists");
    }
};
