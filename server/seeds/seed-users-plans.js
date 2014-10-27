Meteor.startup(function() {

  /*var plan1 = {
    user_id
  };*/

  /* Seeding diary plans */
  if (UsersPlans.find({}).count() === 0) {
    //Plans.insert(plan1);
  }

});
