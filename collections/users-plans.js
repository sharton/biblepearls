UsersPlans = new Mongo.Collection('users_plans');

UsersPlans.helpers({

});

UsersPlans.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
