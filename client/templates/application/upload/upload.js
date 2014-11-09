Template.upload.events({
  'click button': function(e) {
    var msg = qrScanner.message();

    if (_.isUndefined(msg)) {
        return;
    }

    console.log(msg);
  }
});
