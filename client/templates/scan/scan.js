Template.scan.events({
  'change #camera-input': function(e) {
    if (e.target.files.length == 1 && e.target.files[0].type.indexOf("image/") == 0) {
      this._url = URL.createObjectURL(e.target.files[0]);
      $("#yourimage").attr("src", this._url);
    }
    if (this._url) {
      qrcode.callback = function (data) {
        $("#testh2").show();
        $("#yourimage").show();
        $("#result").text(data);
      };
      qrcode.decode(this._url);
    }
  }
});
