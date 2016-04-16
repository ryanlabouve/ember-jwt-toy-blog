import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['current-user-component'],
  session: Ember.inject.service(),
  actions: {
    signout() {
      this.get('session').invalidate();
    }
  }
});
