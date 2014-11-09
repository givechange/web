Template.userItem.helpers({
  id: function() {
    return this._id;
  },
  my_balance: function() {
    console.log("Looking up balance for "+this._id);
    var last = Donations.find({user_id: this._id}, {sort: {timestamp: -1}, limit: 1}).fetch();
    if (last.length == 0) return 0;
    console.log(last[0].balance);
    return String(last[0].balance);
  },
  url: function() {
    if (this._id == undefined) return "";
    var url = _getUrl(this._id);
    return url;
  },
  qr: function() {
    Meteor.defer(function() {
      var url = $('#donatelink').attr('href');
      if (url == "") return;
      console.log(url);
      var qrcodesvg   = new Qrcodesvg( url, "qrcode", 250);
      qrcodesvg.draw();
    });

  }
});

function _getUrl(id) {
  return "/donate/" + id;
}
