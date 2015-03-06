Email.NewEmailRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('email');
  }
});
