Restaurants = new Mongo.Collection("restaurants")

Restaurants.deny({
  update: function(userId, Restaurant, fieldNames, modifier) {
    var errors = validateRestaurant(modifier.$set);
    return errors.title || errors.address;
  }
});

validateRestaurant = function (Restaurant) {
  var errors = {};

  if (!Restaurant.name)
    errors.title = "Please fill in a name";
  
  if (!Restaurant.address)
    errors.address =  "Please fill in an address";

  return errors;
}

Meteor.methods({
  restaurantInsert: function(restaurant) {
    check(restaurant, {
      name: String,
      address: String
    });

    console.log("Attribs: " + restaurant);

    restaurant._id = Restaurants.insert(restaurant);

    console.log("Success? " + restaurant._id);

    return restaurant._id;
  }
});