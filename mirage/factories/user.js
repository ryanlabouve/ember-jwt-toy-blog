import { Factory, faker } from 'ember-cli-mirage';

const fname = faker.name.firstName();
const lname = faker.name.lastName();
const name = `${fname} ${lname}`;
const email = `${name}@test.com`;

export default Factory.extend({
  name,
  email
});
