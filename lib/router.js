Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('entries'); }
});

Router.map(function() {
    this.route('entriesList', {
      path: '/'}
    );

    this.route('entryDetails', {
      path: '/entries/:_id',
      data: function() { return Entries.findOne(this.params._id); }
    });

    this.route('entryInsert', {
      path: '/insert'
    });
});

var requireLogin = function(pause) {
  if (!Meteor.user()) {
    this.render('accessDenied');
  }
}

Router.onBeforeAction('loading');
