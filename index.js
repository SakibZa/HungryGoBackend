const express = require('express')
require('dotenv').config();
const port = process.env.PORT;
const db = require('./config/mongoose.js');
const app = express();

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json());

app.use('/', require('./routes/index.js'));
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})