const express = require('express');
const connectDB = require('./config/database');

const app=express();

connectDB();

app.get('/',(req,res)=> res.send('Hello Welcome to Node'));

const port=process.env.PORT || 8082;

app.listen(port, ()=>console.log(`Server Running on ${port}`));
