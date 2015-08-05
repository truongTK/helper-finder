// Define a collection to hold our tasks
// This code is executed on the client only
Meteor.subscribe("avatar");
Meteor.subscribe("helper");
Meteor.subscribe("userinfo");
Meteor.subscribe("jobs");

Meteor.startup(function () {  
  // Use Meteor.startup to render the component after the page is ready
  injectTapEventPlugin();
  var isLangdingPage = Cookie.get('langdingpage', function(s) { return parseInt(s); } );
  if(isLangdingPage != 1){
    React.render(<LandingPage />, document.getElementById("render-target"));
  }
  else{
    React.render(<HomePage />, document.getElementById("render-target"));
  }
});
