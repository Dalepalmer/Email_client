Email.NewEmailController = Ember.ObjectController.extend({
  needs: 'user',
  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        recipient: this.get('recipient'),
        subject: this.get('title'),
        body: this.get('body')
      });
      console.log(newEmail)
      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
});
