Template.plans.rendered = function() {
  
};

Template.planDetails.events({
  'click #btn-plan-add' : function() {
    UsersPlans.insert({
      user_id: Meteor.userId(),
      plan_id: this._id
    });
  }
});
