// Define a collection to hold our tasks
// This code is executed on the client only
Meteor.subscribe("avatar");

Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  injectTapEventPlugin();
  React.render(<LandingPage />, document.getElementById("render-target"));
});
