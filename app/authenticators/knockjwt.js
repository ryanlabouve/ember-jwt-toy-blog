import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  tokenEndpoint: `${config.host}/knock/auth`,
  restore(data) {
    debugger;
  },

  authenticate(creds) {
    debugger;
    const { identification, password } = creds;
    // easier way to do this
    // look at esa source
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: 'POST',
        data: JSON.stringify({
          test: '1234',
          email: identification,
          password
        }),
        contentType: 'application/json',
        dataType: 'json'
      }).then(function(response) {
        debugger;
        Ember.run(function() {
          resolve({
            token: response.jwt
          });
        });
      }, function error(xhr, status, error) {
        debugger;
        const response = xhr.responseText;
        Ember.run(function() {
          reject(response);
        });
      });
    }); // Ember.RSVP
  },

  invalidate(data) {
    debugger;
  }
});
