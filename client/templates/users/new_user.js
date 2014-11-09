Template.newUser.created = function() {
  Session.set('newUserErrors', {});
}

Template.newUser.helpers({
  errorMessage: function(field) {
    return Session.get('newUserErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('newUserErrors')[field] ? 'has-error' : '';
  }
});

Template.newUser.events({
  'submit form': function(e) {
    e.preventDefault();

    var user = {
      name: $(e.target).find('[name=name]').val(),
      photo: $(e.target).find('[name=photo]').val()
    };

    var errors = validateUser(user);
    if (errors.name || errors.photo) {
      return Session.set('newUserErrors', errors);
    }

    Meteor.call('userInsert', user, function(error, result) {
      if (error) return throwError(error.reason);
      console.log("Saved user, id: " + result._id);
  
      Router.go('userPage', {_id: result._id});
    });
  }
});
