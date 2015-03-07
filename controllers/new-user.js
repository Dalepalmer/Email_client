Email.NewEmailController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var c = this.get('model');
      comment.save();

      var controller = this;
      comment.get('post').then(function(post) {
        post.save();
        controller.transitionToRoute('post', post);
      });
    }
  }
});
