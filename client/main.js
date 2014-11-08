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

  Template.payment.events({
    'click button': function(e) {
        e.preventDefault();
        StripeCheckout.open({
            key: 'pk_test_anR5YIoK80nL7qqTzkcCEyAv',
            amount: 5000,
            name: 'The Store',
            description: 'A whole bag of awesome ($50.00)',
            panelLabel: 'Pay Now',
            token: function(res) {
                // Do something with res.id
                // Store it in Mongo and/or create a charge on the server-side
                console.info(res);
            }
        });
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
