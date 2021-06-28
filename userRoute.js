'use strict'
let express = require('express');
let router = express.Router();
let getStoredData =   require('./fileloader.js');
let authorize = require('./Authorize.js');
let create = require('./register.js');
// Home page route
router.get('/create', function(req, res) {
  res.sendFile(__dirname + '/public/create.html');
});

// About page route
router.get('/login', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

router.post('/trylogin',(req,res)=>{
  getStoredData("./","users.json")
  .then((result)=>{
    res.send(JSON.stringify(authorize(req.body,result)))
  }).catch(console.error);
})

router.post('/trycreate',(req,res)=>{
  getStoredData("./","users.json")
  .then((result)=>{
    res.send(JSON.stringify(create(req.body,result)))
  }).catch(console.error);
})

module.exports = router;