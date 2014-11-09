Template.upload.events({
  'click button': function(e) {
    console.log(this)
    if (this._url) {
      qrcode.callback = function (data) {
        console.log('doSomething()');
      };
      console.log(this)
      qrcode.decode(this._url);
    }
  },
  'change #camera-input': function(e) {
    if (e.target.files.length == 1 && e.target.files[0].type.indexOf("image/") == 0) {
      this._url = URL.createObjectURL(e.target.files[0]);
      $("#yourimage").attr("src", this._url);
    }
  },
});
