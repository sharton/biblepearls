Template.diaries.rendered = function() {

};

Template.userDiaryBox.helpers({
  joinWithDiaries: function() {
    var userDiary = this;
    var diary = Diaries.findOne({_id: userDiary.diary_id});
    return _.extend(userDiary, _.omit(diary, '_id'));
  }
});

Template.userDiaryBox.helpers({
  'click #btn-diary-delete' : function() {
    
    //db.products.remove( { qty: { $gt: 20 } } )
  }
});

Template.diaryDetails.events({
  'click #btn-diary-add' : function() {
    UserDiaries.insert({
      user_id: Meteor.userId(),
      diary_id: this._id
    });
    alert('added!');
  }
});
