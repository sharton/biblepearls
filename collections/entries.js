// diary entries
Entries = new Meteor.Collection('entries');

Entries.allow({
  insert: function(userId, doc) {
    return !! userId;
  }
});
