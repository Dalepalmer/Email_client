Email.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('emails');
  this.resource('new-email');
});
