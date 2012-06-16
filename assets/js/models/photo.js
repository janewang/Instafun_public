window.Photo = Backbone.Model.extend({
  image: function() {
    return this.get('images').low_resolution.url;
  }
});

window.PhotoCollection = Backbone.Collection.extend({
  model: Photo
})