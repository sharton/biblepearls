Router.map(function() {

  this.route('home', {
    path: '/'
  });

  this.route('dashboard', {
    path: '/dashboard',
    loginRequired: 'entrySignIn',
    waitOn: function() {
      return this.subscribe("items");
    },
    data: {
      items: Items.find({})
    },
    onAfterAction: function() {
      SEO.set({
        title: 'Доска | ' + SEO.settings.title
      });
    }
  });

  this.route('diaries', {
    path: '/diaries',
    loginRequired: 'entrySignIn',
    waitOn: function() {
      this.subscribe("diaries");
      this.subscribe("user_diaries");
    },
    data: {
      systemDiaries: Diaries.find({}),
      userDiaries: UserDiaries.find({})
    },
    onAfterAction: function() {
      SEO.set({
        title: 'Дневники | ' + SEO.settings.title
      });
    }
  });

  this.route('diaryDetails', {
    path: '/diaries/:_id',
    loginRequired: 'entrySignIn',
    waitOn: function() {
      return this.subscribe("diaries");
    },
    data: function() {
      return Diaries.findOne(this.params._id);
    }
  });

  this.route('profile', {
    path: '/profile',
    data: function() {
      return Meteor.user();
    }
  });

  this.route('notFound', {
    path: '*',
    where: 'server',
    action: function() {
      this.response.statusCode = 404;
      this.response.end(Handlebars.templates['404']());
    }
  });

});
