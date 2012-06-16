/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};
exports.about = function(req, res){
  res.render('about');
};
exports.contact = function(req, res){
  res.render('contact');
};
exports.read = function(req, res) {
  res.render('index');
}