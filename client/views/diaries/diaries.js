Template.diaries.rendered = function() {

};

Template.diaryDetails.events({
  'click #btn-diary-add' : function() {
    UserDiaries.insert({
      user_id: Meteor.userId(),
      plan_id: this._id
    });
  }
});
