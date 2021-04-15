const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.Promise = global.Promise;


const url =process.env.DB_CONNECT ;

let mong = mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) =>
{
    if (!err)
    {
        console.log('Database connected')
    }
    else
    {
        console.log('Error in DB connection' + err)
    }
});

