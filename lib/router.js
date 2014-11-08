Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'newUser'})
Router.route('/user/:id', {name: 'userPage'})
