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
  'submit form': function(e, template) {
    e.preventDefault();

    var file = template.find('#fileinput').files[0];
    var reader = new FileReader();

    var user = {
      name: $(e.target).find('[name=name]').val(),
      photo: $(e.target).find('[name=photo]').val()
    };

    var errors = validateUser(user);
    if (errors.name || errors.photo) {
      return Session.set('newUserErrors', errors);
    }

    reader.onload = function(e) {
      user.photo = e.target.result;
      Meteor.call('userInsert', user, function(error, result) {
        if (error) return throwError(error.reason);
        console.log("Saved user, id: " + result);
  
        Router.go('/user/' + result);
      });
    }
    reader.readAsDataURL(file);
  }
});
