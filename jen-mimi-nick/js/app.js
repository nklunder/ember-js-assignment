var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about', { path: '/aboutus'});
  this.resource('products');
});

App.ApplicationController = Ember.Controller.extend({
  time: function () {
    return (new Date()).toDateString();
  }.property()
});

App.ApplicationRoute = Ember.Route.extend({

  model: function() {
    return { name: 'Ultimate Breath Holder', timer: 60 };
  },

  activate: function() {
    this.interval = setInterval(function() {
      var timer = this.get('controller.model.timer');
      this.set('controller.model.timer', timer - 1);
    }.bind(this), 1000);
  },

  deactivate: function() {
    clearInterval(this.interval);
  }

});
