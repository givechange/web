Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'newUser'})
Router.map(function() {
  this.route('userPage', {
    path: '/user/:_id',
    data: function() { return Users.findOne(this.params._id); }
  });
});

Router.route('/donate', {name: 'payment'})
Router.route('restaurants/new', {name: 'newRestaurant'})
