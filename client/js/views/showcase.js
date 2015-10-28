var app = app || {};

app.ShowcaseView = Backbone.View.extend({
  el: '#shows',

  events: {
    'click #add': 'addShow'
  },

  // fill in with your collection setup
  initialize: function() {
    this.collection = new app.Showcase(); // create the new collection
    this.collection.fetch({reset: true}); // fetch reads the collection from the persistent data store
    this.render();
    this.listenTo(this.collection, 'add', this.renderShow);
    this.listenTo(this.collection, 'reset', this.render);
  },

  // fill in
  render: function() {
    this.collection.each(function(show) {
      this.renderShow(show)
    }, this)
  },

  // fill in
  renderShow: function(show) {
    var view = new app.ShowView({model: show})
    $('#shows').append(view.render().el);
  },

  // fill in
  addShow: function(event) {
  event.preventDefault();

    var data = {};

    $('#addShow').children().each(function(index, input) {
      var $input = $(input);
      var validInput = input.localName !== 'input' && input.localName !== 'text';
      if (validInput || input.type === 'submit') { return true; } // return true goes to the next entry in each, like next in Ruby
      if ($input.val() !== '') {
        data[input.name] = $input.val(); // set the keys and values for the data object

      }
    });

    this.collection.create(data);
  }
})
