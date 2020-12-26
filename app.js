const http = require('http');
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const helmet = require('helmet');

let index = require('./routes/indexRouter')
const hostname = '127.0.0.1';
const port = 3000;


const app = express()

app.use(helmet());
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
mongoose.connect('mongodb://localhost/vehicle-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use('/api/v1', index)

module.exports = app
