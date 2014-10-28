UserDiaries = new Mongo.Collection('user_diaries');

UserDiaries.helpers({

});

UserDiaries.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
