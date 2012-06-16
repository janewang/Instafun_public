exports.read = function(req, res) {
  res.render('index');
}

exports.query = function(req, res) {
  res.render('index');
}

exports.create = function(req, res) {
  var opts = {
    url: 'https://api.instagram.com/v1/tags/' + req.body.tags + '/media/recent',
    json: true,
    qs: {
      client_id: {client_id}
    }
  }
  request.get(opts, function(e, r, body){
    _(body.data).each(function(item){
      new Photo(item).save(function(err, photo){        
      });
    });
    res.json(body.data);
  });
}