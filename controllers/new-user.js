Email.NewUserController = Ember.ObjectController.extend({
  actions: {
    createUser: function() {
      var newUser = this.store.createRecord('user', {
        username: this.get('username'),
        password: this.get('password'),
      });
      console.log(newUser);
      newUser.save();
      this.transitionToRoute('home');
    }
  }
});
