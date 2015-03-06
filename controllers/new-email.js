Email.NewEmailController = Ember.ObjectController.extend({
  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        recipient: this.get('recipient'),
        subject: this.get('title'),
        body: this.get('body')
      });
      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
});
