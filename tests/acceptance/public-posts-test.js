import { test } from 'qunit';
import moduleForAcceptance from 'ember-jwt-toy-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | public posts');

test('visited /', function(assert) {
  visit('/');
  server.createList('public-post', 5);

  andThen(function() {
    assert.equal(
      find('.public-post').length,
      5,
      'we can see all the public posts from /'
    );
  });
});
