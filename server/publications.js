Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
  }
});

Meteor.publishComposite("diaries", function() {
  return {
    find: function() {
      return Diaries.find({});
    }
  }
});

Meteor.publishComposite("user_diaries", function() {
  return {
    find: function() {
      return UserDiaries.find({user_id: this.userId});
    }
  }
});

/*Meteor.publishComposite("user_diaries", function() {
  return {
    find: function() {
      return Diaries.find({});
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
});*/

/*Meteor.publish('users_plans': function(userId) {
  var usersPlansCursor = UsersPlans.find({user_id: userId});
  var planIds = usersPlansCursor.map(function(p) { return p.plan_id });

  return Plans.find({_id: {$in: planIds}});
});*/
