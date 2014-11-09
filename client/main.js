if (Meteor.isClient) {
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
