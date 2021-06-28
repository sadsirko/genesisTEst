'use strict';

const fs = require('fs');

const getStoredData = async (path,name) => {

  const data = await fs.promises.readFile(path+name, 'utf8');
  return data;
};
module.exports = getStoredData; 