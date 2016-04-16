import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['user-login-component'],
  session: Ember.inject.service(),
  actions: {
    login() {
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
console.log('failzzzzzzzzz');
                                         });
    }
  }
});
