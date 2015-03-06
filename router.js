Email.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('new-email' );
  this.resource('new-user');
  this.resource('email', {path: ':user_id'});
  this.resource('user', {path: ':user_id'});
});
