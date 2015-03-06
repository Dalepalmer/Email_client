Email.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('new-email');
  this.resource('emails',{path:'emails/user_id'});
  this.resource('new-user');
});
