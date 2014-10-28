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
        title: 'Dashboard | ' + SEO.settings.title
      });
    }
  });

  /* Планы чтения */
  this.route('plans', {
    path: '/plans',
    loginRequired: 'entrySignIn',
    waitOn: function() {
      return this.subscribe("plans");
    },
    data: {
      items: Plans.find({})
    },
    onAfterAction: function() {
      SEO.set({
        title: 'Планы чтения | ' + SEO.settings.title
      });
    }
  });

  this.route('planDetails', {
    path: '/plans/:_id',
    loginRequired: 'entrySignIn',
    waitOn: function() {
      return this.subscribe("plans");
    },
    data: function() {
      return Plans.findOne(this.params._id);
    }
  });

  this.route('myPlans', {
    path: '/myplans',
    loginRequired: 'entrySignIn',
    waitOn: function() {
      return this.subscribe("plans");
    },
    data: {
      items: function() {
          return Plans.find({});
      }
    },
    onAfterAction: function() {
      SEO.set({
        title: 'Мои планы чтения | ' + SEO.settings.title
      });
    }
  });

  this.route('myPlanDetails', {
    path: '/myplans/:_id',
    loginRequired: 'entrySignIn',
    waitOn: function() {
      this.subscribe("users_plans");
      return this.subscribe("plans");
    },
    data: function() {
      //return Plans.findOne(this.params._id);
      // finish
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
