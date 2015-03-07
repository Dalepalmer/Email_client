Email.Email = DS.Model.extend({
  recipient: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  // user: DS.belongsTo('user', {async: true})
});
