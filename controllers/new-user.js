Email.NewUserController = Ember.ObjectController.extend({
  actions: {
    createUser: function() {
      var newUser = this.store.createRecord('user', {
        username: this.get('username'),
        password: this.get('password'),
      });
      newUser.save();
      this.transitionToRoute('emails');
    }
  }
});
