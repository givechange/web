Template.upload.events({
  'click button': function(e) {
  	console.log(qrScanner)
    var msg = qrScanner.message();

    if (_.isUndefined(msg)) {
        return;
    }

    console.log(msg);
  }
});
