var express = require('express');
var router = express.Router();
var randomWords = require('random-words'); 
var upperCase = require('upper-case-first');
var moment = require('moment');

// import { upperCaseFirst } from "upper-case-first";

const symbols = ['!', '@', '#', '$', '%', '&', '/'];

router.get('/', function(req, res, next) {
  password = upperCase.upperCaseFirst(randomWords({ exactly: 3, maxLength:3, minLength:3, join: '.' })+'-'+symbols[between(0, symbols.length)]+ between(10,99))
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ 
    password: password ,
    time: moment().format(),
  });
});

router.get('/simple', function(req, res, next){
  res.send(rword.generate())
})

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

module.exports = router;
