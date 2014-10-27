Meteor.startup(function() {

  var plan1 = {
    name: "Жемчужины тихого времени 1",
    desc: "План для прочтения Библии за год.",
    days: [
      {day: 1, text:"Gen 1:1-10" },
      {day: 2, text:"Gen 1:11-20" },
      {day: 3, text:"Gen 1:21-30" }
    ]
  };

  var plan2 = {
    name: "Жемчужины тихого времени 2",
    desc: "План для прочтения Библии за год.",
    days: [
      {day: 1, text:"Gen 1:1-10" },
      {day: 2, text:"Gen 1:11-20" },
      {day: 3, text:"Gen 1:21-30" }
    ]
  };

  var plan3 = {
    name: "Жемчужины тихого времени 3",
    desc: "План для прочтения Библии за год.",
    days: [
      {day: 1, text:"Gen 1:1-10" },
      {day: 2, text:"Gen 1:11-20" },
      {day: 3, text:"Gen 1:21-30" }
    ]
  };

  /* Seeding diary plans */
  if (Plans.find({}).count() === 0) {
    Plans.insert(plan1);
    Plans.insert(plan2);
    Plans.insert(plan3);
  }

});
