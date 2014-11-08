Users = new Mongo.Collection("users")

validateUser = function(user) {
  var errors = {};

  if (!user.name) errors.name = "Please enter a name";
  if (!user.photo) errors.photo = "Please attach your photo";

  return errors
}

Meteor.methods({
  userInsert: function(userAttributes) {
    check(userAttributes, {
      name: String,
      photo: String
    });

    user = _.extend(userAttributes, {
    });

    user._id = Users.insert(user);

    return user._id;
  }
});
