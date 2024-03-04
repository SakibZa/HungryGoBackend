const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://HungryGo:DeebaSakib%40123@cluster0.t89v1bk.mongodb.net/HungryGo?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});