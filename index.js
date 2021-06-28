'use strict'
let express = require('express');
let app = express();
let userRoute = require('./userRoute.js');
let port = 3000;
const rp = require('request-promise');
let requestOptions = require('./API.js');

__dirname = '/home/denis/Desktop/gen/genesisTest' ;

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

app.get('/btcRate',(req,res)=>{
  let price2; 
  rp(requestOptions).then(response => {
    price2 = response.data[0].quote.UAH.price;
    price2 = new String(price2)
    console.log(price2);
    res.send(price2)
 }).catch((err) => {
   console.log('API call error:', err.message);
 }); 
})

app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});