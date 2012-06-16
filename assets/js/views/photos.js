window.Photos = Backbone.View.extend({
  
  initialize: function(opts) {
    this.collection.on('reset', this.reset, this);
  },
  
  reset: function(models) {
    // this is referred in the view
    var self = this;
    self.$('img').remove();
    models.each(function(model){
      // inside this function this refers to just within its scope so need to use self instead of this
      $('<img />', {src: model.image()}).appendTo(self.$el);
    });
  },

  render: function() {
    return this; // instance of Photos
  }
});
