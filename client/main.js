Users = new Mongo.Collection("users")
Restaurants = new Mongo.Collection("restaurants")
Donations = new Mongo.Collection("donations")
Redemptions = new Mongo.Collection("redemptions")

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.body.helpers({
    users: function() {
      return Users.find({});
    },
    restaurants: function() {
      return Restaurants.find({});
    },
    donations: function() {
      return Donations.find({});
    },
    redemptions: function() {
      return Redemptions.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
