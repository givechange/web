Template.userItem.helpers({
  id: function() {
    return this._id;
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
  return "http://givechange.meteor.com/donate/" + id;
}
