Meteor.methods({
  "createAvatar": function (data) {
    return Avatar.insert({
      data: data,
      createdAt: new Date(),
    });
  }
});
