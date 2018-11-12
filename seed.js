/* eslint-disable camelcase */
const models = require('./models');

const corn = models.Vegetable.create({
  name: 'corn',
  color: 'yellow',
  planted_on: Date.now(),
});

const kale = models.Vegetable.create({
  name: 'kale',
  color: 'green',
  planted_on: Date.now(),
});

const mushroom = models.Vegetable.create({
  name: 'mushroom',
  color: 'brown',
  planted_on: Date.now(),
});

const wenyi = models.Gardener.create({
  name: 'wenyi',
  age: 26,
});

const brynn = models.Gardener.create({
  name: 'brynn',
  age: 30,
});

const plot = models.Plot.create({
  size: 100,
  shaded: true,
});

models.db
  //   .sync({ force: true })
  .sync()
  .then(() => {
    console.log('db sync successfully');
  })
  .catch(err => console.error(err))
  .finally(() => {
    models.db.close();
  });
