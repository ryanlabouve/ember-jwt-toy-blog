import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['user-login-component'],
  session: Ember.inject.service(),
  actions: {
    login() {
      this.set('loginError', false);
      let {
        identification,
        password
      } = this.getProperties(
        'identification',
        'password');

        this.get('session').authenticate('authenticator:knockjwt',
          {
            identification,
            password
          }).catch((error) => {
            this.set('loginError', true);
          });
    }
  }
});
