Template.diaries.rendered = function() {
};

Template.userDiaryBox.helpers({
  joinWithDiaries: function() {
    var userDiary = this;
    var diary = Diaries.findOne({_id: userDiary.diary_id});
    return _.extend(userDiary, _.omit(diary, '_id'));
  }
});

Template.systemDiaryDetails.events({
  'click #btn-diary-add' : function(event, template) {
    event.preventDefault();
    alert(this._id);
    var userDiaryName = template.find("#userDiaryName").value;
    UserDiaries.insert({
      user_id: Meteor.userId(),
      diary_id: this._id,
      user_diary_name: userDiaryName
    });
    Router.go('diaries');
  }
});
