Template.userItem.helpers({
  id: function() {
    return this._id;
  },
  url: function() {
    var url = _getUrl(this._id);
    return url;
  }
});

Template.userItem.rendered = function() {
  if (this.data != undefined) {
    console.log(this);
    var url = _getUrl(this.data._id);
    var qrcodesvg   = new Qrcodesvg( url, "qrcode", 250);
    qrcodesvg.draw();
  }
}

function _getUrl(id) {
  return "http://givechange.meteor.com/donate/" + id;
}
