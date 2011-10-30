var fs = require('fs');
var config_json = fs.readFileSync(__dirname+'/config.json', 'utf8');
module.exports = JSON.parse(config_json);
