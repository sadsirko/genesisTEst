'use strict'
let api_key="f601da03-cdd6-444d-9a16-f87cd0ce05d6"

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '1',
    'convert': 'UAH'
  },
  headers: {
    'X-CMC_PRO_API_KEY': api_key
  },
  json: true,
  gzip: true
};



module.exports=requestOptions;