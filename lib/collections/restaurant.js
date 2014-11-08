Restaurants = new Mongo.Collection("restaurants")

Restaurants.deny({
  update: function(userId, Restaurant, fieldNames, modifier) {
    var errors = validateRestaurant(modifier.$set);
    return errors.title || errors.url;
  }
});

validateRestaurant = function (Restaurant) {
  var errors = {};

  if (!Restaurant.name)
    errors.title = "Please fill in a name";
  
  if (!Restaurant.address)
    errors.url =  "Please fill in an address";

  return errors;
}

Meteor.methods({
  RestaurantInsert: function(RestaurantAttributes) {
    check(this.userId, String);
    check(RestaurantAttributes, {
      name: String,
      address: String
    });
    
    var errors = validateRestaurant(RestaurantAttributes);
    if (errors.title || errors.url)
      throw new Meteor.Error('invalid-Restaurant', "You must set a name and address for your Restaurant");
    
    var Restaurant = _.extend(RestaurantAttributes, {
      submitted: new Date(),
    });
    
    var restaurantId = Restaurants.insert(Restaurant);
    
    return {
      _id: restaurantId
    };
  },
});