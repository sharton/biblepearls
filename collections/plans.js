Plans = new Mongo.Collection('plans');

Plans.helpers({

});

Plans.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
