Diaries = new Mongo.Collection('diaries');

Diaries.helpers({

});

Diaries.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
