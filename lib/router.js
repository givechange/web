Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/upload', {name: 'upload'})

Router.map(function() {
  this.route('userPage', {
    path: '/user/:_id',
    data: function() { return Users.findOne(this.params._id); }
  });

  this.route('newUser', {
    path: '/'
  })

  this.route('payment', {
    path: '/donate'
  })

  this.route('newRestaurant', {
    path: 'restaurants/new'
  })

});
