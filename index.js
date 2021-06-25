let express = require('express');
let app = express();
let userRoute = require('./userRoute.js');
__dirname = '/home/denis/Desktop/project' 

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

app.use('/user',userRoute); 

app.use(express.static(__dirname + '/public'));

// app.get('*', function(req, res){
//   res.sendFile(__dirname + '/public/index.html');
// });