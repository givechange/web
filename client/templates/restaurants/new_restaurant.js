Template.newRestaurant.created = function() {
  Session.set('newRestaurantErrors', {});
}

Template.newRestaurant.helpers({
  errorMessage: function(field) {
    return Session.get('newRestaurantErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('newRestaurantErrors')[field] ? 'has-error' : '';
  }
});

Template.newRestaurant.events({
  'submit form': function(e) {
    e.preventDefault();

    var restaurant = {
      name: $(e.target).find('[name=name]').val(),
      address : $(e.target).find('[name=address]').val()
    };

    var errors = validateRestaurant(restaurant);
    if (errors.name || errors.address) {
      return Session.set('newRestaurantErrors', errors);
    }

    Meteor.call('restaurantInsert', restaurant, function(error, result) {
      console.log(result)
      // if (error) return throwError(error.reason);
  
      Router.go('/restaurants/' + result);
    });
  }
});
