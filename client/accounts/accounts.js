Meteor.startup(function() {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
  });

  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/diaries',
    profileRoute: '/profile',
    language: 'ru',
    showSignupCode: false,
    extraSignUpFields: [{
      field: "firstName",
      label: "Имя",
      type: "text",
      required: true
    },
    {
      field: "lastName",
      label: "Фамилия",
      type: "text",
      required: true
    }
    ]
  });
});
