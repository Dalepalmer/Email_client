Email.EmailRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('email', params.user_id);
  }
});
