'use strict'
let express = require('express');
let app = express();
let userRoute = require('./userRoute.js');
let port = 3000;

__dirname = '/home/denis/Desktop/genProj' 

app.use(express.json());

app.use(
  express.urlencoded({
      extended: true,
  })
);

app.listen(port, function() {
  console.log('listening on port 3000!');
});
app.use(express.static(__dirname + '/public'));

app.use('/user',userRoute); 
app.use('/trylogin',userRoute)

