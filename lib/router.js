Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'newUser'})
Router.route('/donate', {name: 'payment'})
Router.route('restaurants/new', {name: 'newRestaurant'})
