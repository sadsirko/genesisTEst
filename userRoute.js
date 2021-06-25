let express = require('express');
let router = express.Router();

// Home page route
router.get('/create', function(req, res) {
  res.send('user create page');
});

// About page route
router.get('/login', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = router;