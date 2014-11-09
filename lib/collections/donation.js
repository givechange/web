Donations = new Mongo.Collection("donations")

Donations.deny({
  update: function(userId, donation) { return true; },
  remove: function(userId, donation) { return true; },
});

validateDonation = function(donation) {
  var errors = {};

  if (!donation.amount) errors.amount = "Please enter a donation amount";
  return errors;
}

Meteor.methods({
  donationInsert: function(donationAttributes) {
    // TODO finish
  }
});
