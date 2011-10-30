var fs = require('fs');
var src = require('./config.src.js');
fs.writeFile(__dirname+'/config.json', JSON.stringify(src), 'utf8', function(){
  console.log('config compiled :-)');
});
