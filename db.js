import mongoose from 'mongoose';

const mongoURL = " mongodb://127.0.0.1:27017/hotels"

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error',()=>{
    console.log('errror');
    
})
db.on('connected',()=>{
    console.log('connected mongose');
    
})
db.on('disconnected',()=>{
    console.log('disconnected from mongose');
})

export default db;