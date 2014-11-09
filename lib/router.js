Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'newUser'})
Router.route('/user/:id', {name: 'userPage'})
Router.route('/donate', {name: 'payment'})
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
