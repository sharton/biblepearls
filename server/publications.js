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
      return Plans.find({});
    },
    children: [
      {
        find: function(plan) {
          return Comments.find(
              { postId: plan._id }
          );
        }
      }
    ]
  }
});

/*Meteor.publish('users_plans': function(userId) {
  var usersPlansCursor = UsersPlans.find({user_id: userId});
  var planIds = usersPlansCursor.map(function(p) { return p.plan_id });

  return Plans.find({_id: {$in: planIds}});
});*/
