Meteor.startup(function() {

  var diary1 = {
    name: "Жемчужины тихого времени 1",
    desc: "План для прочтения Библии за год.",
    days: [
      {day: 1, text:"Gen 1:1-10" },
      {day: 2, text:"Gen 1:11-20" },
      {day: 3, text:"Gen 1:21-30" }
    ]
  };

  var diary2 = {
    name: "Жемчужины тихого времени 2",
    desc: "План для прочтения Библии за полгода.",
    days: [
      {day: 1, text:"Gen 1:1-10" },
      {day: 2, text:"Gen 1:11-20" },
      {day: 3, text:"Gen 1:21-30" }
    ]
  };

  var diary3 = {
    name: "Жемчужины тихого времени 3",
    desc: "План для прочтения Библии за 3 месяца.",
    days: [
      {day: 1, text:"Gen 1:1-10" },
      {day: 2, text:"Gen 1:11-20" },
      {day: 3, text:"Gen 1:21-30" }
    ]
  };

  /* Seeding diaries */
  if (Diaries.find({}).count() === 0) {
    Diaries.insert(diary1);
    Diaries.insert(diary2);
    Diaries.insert(diary3);
  }

});
