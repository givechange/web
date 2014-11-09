Template.payment.events({
    'click button': function(e) {
        e.preventDefault();
        var amt = $(e.target).attr('x-amt');
        var pennies = amt * 100;
        console.log("Firing stripe");
        console.log(this);
        var userId = this._id;
        StripeCheckout.open({
            key: 'pk_test_anR5YIoK80nL7qqTzkcCEyAv',
            amount: pennies,
            name: 'Give Change',
            description: 'Donation ($' + amt + ')',
            panelLabel: 'Give Now',
            token: function(res) {
                // Do something with res.id
                // Store it in Mongo and/or create a charge on the server-side
                console.info(res);

                Meteor.call('userBalance', userId, function(error, bal) {

                  var donation = {
                    user_id: userId,
                    amount: parseInt(amt),
                    stripe_id: res.id,
                    donor: res.email,
                    cc_num: res.card.last4,
                    exp_month: res.card.exp_month,
                    exp_year: res.card.exp_year,
                    balance: parseInt(bal) + parseInt(amt),
                    timestamp: Date.now()
                  };
                  console.log(donation);
                  Meteor.call('donationInsert', donation, function(error, result) {
                    if (error) return throwError(error.reason);
                    console.log("Saved donation: " + result);
  
                    Router.go('/thank_you');
                  });
              });
            }
        });
    }
  });
