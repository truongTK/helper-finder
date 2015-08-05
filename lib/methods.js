Meteor.methods({
  "createAvatar": function(data) {
    return Avatar.insert({
      data: data,
      createdAt: new Date(),
    });
  },
  "createHelperAccount": function(props) {
    return Helper.insert({
      name: props.taskerName,
      phone: props.taskerPhone,
      email: props.taskerEmail,
      createdAt: new Date(),
    });
  }
});
