import Mirage from 'ember-cli-mirage';
import Ember from 'ember';

export default function() {
  this.get('/public-posts');
  this.get('/users/:id');
  this.post('/knock/auth_token', (db, request) =>  {
    // debugger;
    const req = JSON.parse(request.requestBody);
    const pw = Ember.get(req, 'auth.password');

    if(pw === 'test1234') {
      return new Mirage.Response(201, {}, { jwt: 'hotdog' });
    } else {
      return new Mirage.Response(404, {}, {});
    }
  });

  this.get('/private-posts', ({ privatePost }, request) => {
    debugger;
    // request.requestHeaders.
    // test if toen works
    const token = Ember.get(request, 'requestHeaders.Authorization');
    if (token === 'hotdog') {
      return privatePost.all(); // schema.user in the second case
    } else {
      return new Mirage.Response(401, {}, {});
    }
  });
}
