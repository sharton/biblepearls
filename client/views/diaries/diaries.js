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
    var userDiaryName = template.find("#userDiaryName").value;
    if (userDiaryName.length > 0) {
      UserDiaries.insert({
        user_id: Meteor.userId(),
        diary_id: this._id,
        user_diary_name: userDiaryName
      });
      toastr.options = {
        "closeButton": true
      }
      toastr.success('Дневник успешно создан!', 'Ваш новый дневник');
      Router.go('diaries');
    } else {
      toastr.options = {
        "closeButton": true
      }
      toastr.error('Имя дневника не может быть пустым!', 'Имя дневника');
    }
  }
});
