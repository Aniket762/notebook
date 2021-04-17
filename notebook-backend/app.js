const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const db = require('./db/db')
const dotenv = require('dotenv');
dotenv.config();
const header_middleware = require("./middlewares/header")

const postRouter = require("./Routes/post");
const userRoutes = require("./Routes/user");
const profileRoutes = require("./Routes/profile");

const app = express();

//app.use(cors());
const PORT = process.env.PORT 

app.use(express.json())
app.use(header_middleware)
const directory = path.join(__dirname, './images');
app.use("/images", express.static(directory));


app.use('/api/posts', postRouter);
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);

app.get('/', (req, res) =>
{
    res.send('<h1>🏡<h1>');
})

app.listen(PORT, () =>
{
    console.log(`app is listening to port ${PORT}`)
})
