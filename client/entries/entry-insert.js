Template.entryInsert.events({
  'submit form': function(e) {
    e.preventDefault();

    var entry = {
      authorMessage: $(e.target).find('[name=authorMessage]').val(),
      userMessage: $(e.target).find('[name=userMessage]').val()
    }

    entry._id = Entries.insert(entry);
    Router.go('entryDetails', entry);
  }
});
