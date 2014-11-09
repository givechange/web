Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'newUser'})
Router.route('/user/:id', {name: 'userPage'})
Router.route('/donate', {name: 'payment'})
Router.route('/upload', {name: 'upload'})
