import { Factory, faker } from 'ember-cli-mirage';

const f = faker;
export default Factory.extend({
  body: faker.lorem.words(),
  title: faker.lorem.paragraphs(),
  createdAt: faker.date.past()
});
