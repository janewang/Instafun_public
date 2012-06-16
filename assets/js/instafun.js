var timer = null;
var photoCollection = null;
var photoView = null;

var Router = Backbone.Router.extend({

  routes: {
    "photos/:query": "photos"
  },

  photos: function(query, page) {
    $('.insta-photo').remove();
    $.post('/photos', {tags: query}).then(function(results){
      photoCollection.reset(results);
    });
  }
  
});

$(function(){
  var router = new Router();
  photoCollection = new PhotoCollection();
  photoView = new Photos({
    el: $('#photos'),
    collection: photoCollection
  });
  

  Backbone.history.start({pushState: true});
  
  $('#tag').on('input', function(e){
    var el  = $(this);
    var val = el.val();
    if (!val.length) return;
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(function(){
      
      router.navigate("photos/" + val, {trigger: true});
    }, 400);
  });
  
});
