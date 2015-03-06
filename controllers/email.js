Email.EmailController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm('Are you sure you want to delete this email?')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
