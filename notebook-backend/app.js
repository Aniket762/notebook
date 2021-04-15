const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const db = require('./db/db')
const dotenv = require('dotenv');
dotenv.config();

const postRouter = require('./Routes/post');

const app = express();

//app.use(cors());
const PORT = process.env.PORT 

app.use(express.json())


app.use('/api/posts', postRouter)

app.get('/', (req, res) =>
{
    res.send('<h1>🏡<h1>');
})

app.listen(PORT, (req, res) =>
{
    console.log(`app is listening to port ${PORT}`)
})
