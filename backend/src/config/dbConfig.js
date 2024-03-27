import mongoose from 'mongoose';


export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_PATH);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};