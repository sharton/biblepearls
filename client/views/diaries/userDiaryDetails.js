Template.userDiaryDetails.helpers({
  joinWithDiaries: function() {
    var userDiary = this;
    var diary = Diaries.findOne({_id: userDiary.diary_id});
    return _.extend(userDiary, _.omit(diary, '_id'));
  }
});

Template.userDiaryDetails.events({
  'click #btn-diary-delete' : function() {
    //e.preventDefault();
    if (confirm("Удалить дневник?")) {
      var currentDiaryId = this._id;
      UserDiaries.remove(currentDiaryId);
      toastr.success('Дневник удален!', 'Ваш дневник');
      Router.go('diaries');
    }
  }
});
