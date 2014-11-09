Template.userPage.helpers({
  my_balance: function() {
    console.log("Looking up balance for "+this._id);
    var last = Donations.find({user_id: this._id}, {sort: {timestamp: -1}, limit: 1}).fetch();
    if (last.length == 0) return 0;
    console.log(last[0].balance);
    return String(last[0].balance);
  }
});
