var fs = require('fs')

_(fs.readdirSync(__dirname)).each(function(file){
  if(!/^index/.test(file)) require(__dirname + '/' + file);
});