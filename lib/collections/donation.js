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
  donationInsert: function(donation) {
    check(donation, {
      user_id: String,
      amount: Number,
      stripe_id: String,
      donor: String,
      cc_num: String,
      exp_month: Number,
      exp_year: Number,
      balance: Number,
      timestamp: Number
    });
    donation._id = Donations.insert(donation);
    console.log("Inserted donation? " + donation._id);
    return donation._id;
  },
  userBalance: function(id) {
    var last = Donations.find({user_id: id}, {sort: {timestamp: -1}, limit: 1}).fetch();
    console.log(last.length);
    if (last.length === 0) return 0;

    console.log(last);
    return last[0].balance;
  }
});
