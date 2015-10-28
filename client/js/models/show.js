var app = app || {};

// create a Backbone Model constructor inside the app object named Show
// assign the following defaults:
// coverImage: 'img/placeholder.png',
// title: 'Unknown',
// genre: 'Unknown',
// stars: '★'


app.Show = Backbone.Model.extend({
  defaults: function() {
    return {
      title: 'Unknown',
      genre: 'Unknown',
      stars: '★'
    }
  }
});
