Router.configure({
  layoutTemplate: 'layout'
})

Router.map(function() {
 this.route('userPage', {
   path: '/user/:_id',
   data: function() { return Users.findOne(this.params._id); }
 });

 this.route('newUser', {
   path: '/new'
 })

 this.route('payment', {
   path: '/donate/:_id',
   data: function() { return Users.findOne(this.params._id); }
 });

 this.route('newRestaurant', {
   path: 'restaurants/new'
 })

 this.route('restaurantPage', {
  path: '/restaurants/:_id',
  data: function() { return Restaurants.findOne(this.params._id); }
 });

 this.route('scan', {
   path:'/'
 });

});
