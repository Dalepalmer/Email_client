Email.User = DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  email: DS.hasMany('email', {async: true})
});
