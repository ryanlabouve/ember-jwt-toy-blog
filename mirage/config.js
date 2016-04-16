import Mirage from 'ember-cli-mirage';

export default function() {
  this.get('/public-posts');
  this.get('/private-posts');
  this.get('/users/:id');
  this.post('/knock/auth', (db, request) =>  {
    const req = JSON.parse(request.requestBody);
    if(req && req.password) {
      return new Mirage.Response(201, {}, { jwt: 'hotdog' });
    } else {
      return new Mirage.Response(404, {}, {});
    }
  });
}
