Template.userItem.helpers({
  id: function() {
    return this._id;
  },
  url: function() {
    if (this._id == undefined) return "";

    var url = "http://localhost:3000/donate/" + this._id;
    var qrcodesvg   = new Qrcodesvg( url, "qrcode", 250);
    qrcodesvg.draw();
    return url;
  }
});
