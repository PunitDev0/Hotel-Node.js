import mongoose from 'mongoose';

const mongoURL = "mongodb://127.0.0.1:27017/hotels";

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('error', () => {
    console.log('Error connecting to MongoDB');
});

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

export default db;
