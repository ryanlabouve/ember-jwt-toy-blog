import { moduleForModel, test } from 'ember-qunit';

moduleForModel('public-post', 'Unit | Model | public post', {
  // Specify the other units that are required for this test.
  needs: []
});

const expectedKeys = [
  'title',
  'body',
  'createdAt'
];

test('it has the right keys', function(assert) {
  let model = this.subject();
  const modelKeys = Object.keys(model.toJSON())
  modelKeys.forEach(function(key) {
    assert.equal(
      expectedKeys.indexOf(key) > -1,
      true,
      `public post should have a ${key} property`
    );
  });

  assert.equal(
    expectedKeys.length,
    modelKeys.length,
    `We are expecting ${expectedKeys.lenght} props and we have ${modelKeys.length} on the model`
  );
});
