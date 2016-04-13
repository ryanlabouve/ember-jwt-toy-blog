export default function() {
  this.get('/public-posts');
  this.get('/private-posts');
  this.get('/users/:id');
}
