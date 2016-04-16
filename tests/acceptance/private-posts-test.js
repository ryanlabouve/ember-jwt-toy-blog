import { test } from 'qunit';
import moduleForAcceptance from 'ember-jwt-toy-blog/tests/helpers/module-for-acceptance';
import {
  /* currentSession,
     invalidateSession , */
  authenticateSession
  } from 'ember-jwt-toy-blog/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | private posts');

test('private-posts on / unauthenticated', function(assert) {
  visit('/');
  server.createList('private-post', 5);

  andThen(function() {
    assert.equal(
      find('.private-post').length,
      0,
      'We cannot see any private posts if we don\'t login'
    );
  });
});

test('private-posts on / authenticated', function(assert) {
  visit('/');
  server.createList('private-post', 5);
  authenticateSession(this.application);

  andThen(function() {
    assert.equal(
      find('.private-post').length,
      0,
      'We cannot see any private posts if we don\'t login'
    );
  });
});
