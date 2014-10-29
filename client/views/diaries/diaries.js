Template.diaries.rendered = function() {

};

Template.userDiaryBox.helpers({
  joinWithDiaries: function() {
    var userDiary = this;
    var diary = Diaries.findOne({_id: userDiary.diary_id});
    return _.extend(userDiary, _.omit(diary, '_id'));
  }
});

Template.userDiaryBox.events({
  'click #btn-diary-delete' : function() {
    //e.preventDefault();
    if (confirm("Удалить дневник?")) {
      var currentDiaryId = this._id;
      UserDiaries.remove(currentPostId);
      Router.go('diaries');
    }
  }
});

Template.systemDiaryDetails.events({
  'click #btn-diary-add' : function() {
    UserDiaries.insert({
      user_id: Meteor.userId(),
      diary_id: this._id
    });
    Router.go('diaries');
  }
});
