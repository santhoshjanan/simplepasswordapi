var express = require('express');
var router = express.Router();
var randomWords = require('random-words'); 
var upperCase = require('upper-case-first');
var moment = require('moment');

// import { upperCaseFirst } from "upper-case-first";

const symbols = ['!', '@', '#', '$', '%', '&', '/'];

/* GET home page. */
router.get('/', function(req, res, next) {
  password = upperCase.upperCaseFirst(randomWords({ exactly: 3, join: '.' })+'-'+symbols[between(0, symbols.length)]+ between(10,99))
  res.send({ 
    password: password ,
    time: moment().format(),
  });
});

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

module.exports = router;
