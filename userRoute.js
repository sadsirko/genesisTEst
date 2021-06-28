'use strict'
let express = require('express');
let router = express.Router();
let getStoredData =   require('./fileloader.js');
let authorize = require('./Authorize.js');

// Home page route
router.get('/create', function(req, res) {
  res.send('user create page');
});

// About page route
router.get('/login', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

router.get('/trylogin',(req,res)=>{
  console.dirxml(req.body)
  res.send(JSON.stringify({"login":"its get"}))
})

router.post('/trylogin',(req,res)=>{
  getStoredData("./","users.json")
  .then((result)=>{
    res.send(JSON.stringify(authorize(req.body,result)))
  }).catch(console.error);

})


module.exports = router;