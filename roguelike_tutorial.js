/**
 * This is the default code Meteor gives us when we create a new app.
 *
 * We'll get rid of it in a minute, but first let's figure out what's what.
 */

// this code runs on the client.
if (Meteor.isClient) {
  Template.hello.greeting = function () {
    // Hello is a template defined in the html page,
    // with a helper method called greeting.
    return "Welcome to roguelike_tutorial.";
  };

  Template.hello.events({
    // meteor's event listeners work similarly to how jquery event subscriptions work.
    'click input' : function () {
        alert("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  // meteor.startup is a special function that runs once the server loads.
  Meteor.startup(function () {
  });
}
