// Define a collection to hold our tasks
// This code is executed on the client only
Meteor.subscribe("avatar");
Meteor.subscribe("helper");
Meteor.subscribe("userinfo");
Meteor.subscribe("jobs");
Meteor.subscribe("service");

Meteor.startup(function () {  
  // Use Meteor.startup to render the component after the page is ready
  injectTapEventPlugin();
<<<<<<< HEAD
  var isLangdingPage = Cookie.get('langdingpage', function(s) { return parseInt(s); } );
  if(isLangdingPage != 1){
    React.render(<LandingPage />, document.getElementById("render-target"));
  }
  else{
    React.render(<HomePage />, document.getElementById("render-target"));
  }
=======
  React.render(<HomePage />, document.getElementById("render-target"));
>>>>>>> 68dd77ade6c02df9ea953f60c109e7e1fec8522f
});
