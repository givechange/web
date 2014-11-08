Users = new Mongo.Collection("users")

validateUser = function(user) {
  var errors = {};

  if (!user.name) errors.name = "Please enter a name";
  if (!user.photo) errors.photo = "Please attach your photo";

  return errors
}

Meteor.methods({
  userInsert: function(user) {
    check(user, {
      name: String,
      photo: String
    });

    console.log("Attribs: " + user);

    user._id = Users.insert(user);

    console.log("Success? " + user._id);

    return user._id;
  }
});
