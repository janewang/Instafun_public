
/**
 * Module dependencies.
 */

var express = require('express')
  , http    = require('http');

global._        = require('underscore');
global.request  = require('request');
global.mongoose = require('mongoose');
global.app      = express();


mongoose.connect('localhost', 'instafun');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('version', require('./package').version);
  app.set('name', require('./package').name)
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('keyboardcatz'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('connect-assets')());
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

require('./models');
require('./helpers');
require('./routes');

http.createServer(app).listen(app.get('port'), function(){
  console.log("%s (%s) on port %d", app.get('name'), app.get('env'), app.get('port'));
});
