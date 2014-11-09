Template.payment.events({
    'click button': function(e) {
        e.preventDefault();
        var amt = $(e.target).attr('x-amt');
        var pennies = amt * 100;
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

                Meteor.call('donationInsert', donation, function(error, result) {
                  if (error) return throwError(error.reason);
                  console.log("Saved donation: " + result);
  
                  Router.go('/thank_you');
                });
            }
        });
    }
  });
