Email.Email = DS.Model.extend({
  recipient: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  // comments: DS.belongsTo('sender', {async: true})
});
