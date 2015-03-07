Email.NewEmailController = Ember.ArrayController.extend({
  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        recipient: this.get('recipient'),
        subject: this.get('subject'),
        body: this.get('body'),
      });
      newEmail.save();
      this.transitionToRoute('email');
    }
  }
});
