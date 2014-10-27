Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});

/* Планы чтения */
Meteor.publishComposite("plans", function() {
  return {
    find: function() {
      return Plans.find({});
    }
  }
});

Meteor.publishComposite("users_plans", function() {
  return {
    find: function() {
      return UsersPlans.find({});
    }
  }
});
