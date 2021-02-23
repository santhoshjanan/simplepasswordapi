var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var moment = require('moment');
var cors = require('cors')

const port = 3000

var corsOptions = {
//    Access-Control-Allow-Origin: '*',
    origin: ['https://password.santhoshj.com', 'http://localhost', 'http://localhost:3000'],
    optionsSuccessStatus: 200 // For legacy browser support
}

var app = express();

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Simple Password app listening at http://localhost:${port}`)
})
