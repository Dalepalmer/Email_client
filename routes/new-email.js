Email.NewEmailRoute = Ember.Route.extend({
  model: function(params) {
    debugger;
    var user = this.modelFor('user');
    var email = this.store.createRecord('email');
    user.get('email').then(function(emails) {
      emails.pushObject(email);
    });
    return email;
  }
});
