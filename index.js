var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var moment = require('moment');

const port = 3000

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Simple Password app listening at http://localhost:${port}`)
})