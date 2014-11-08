Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'newUser'})
Router.route('/donate', {name: 'payment'})
