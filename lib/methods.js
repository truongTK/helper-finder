<<<<<<< HEAD
Meteor.methods({  
  "createAvatar": function (data) {
=======
Meteor.methods({
  "createAvatar": function(data) {
>>>>>>> 68dd77ade6c02df9ea953f60c109e7e1fec8522f
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
