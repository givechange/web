Template.userItem.helpers({
  qr: function() {
    var qrcodesvg = new Qrcodesvg( "http://localhost:3000/donate/{{_id}}", "qr_colored_patterns", 400, {"ecclevel" : 1});
    qrcodesvg.draw({"method":"classic", "fill-colors":["#1C46ED","#021872","#0125C4"]}, {"stroke-width":1});
  }
});
