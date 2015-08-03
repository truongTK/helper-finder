Meteor.publish("userinfo", function() {
  return UserInfo.find({
  });
});
Meteor.publish("jobs", function() {
  return Jobs.find({
  });
});
Meteor.publish("service", function() {
  return Service.find({
  });
});
Meteor.publish("avatar", function() {
  return Avatar.find({
  });
});
