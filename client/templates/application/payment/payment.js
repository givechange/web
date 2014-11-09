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