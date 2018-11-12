/* eslint-disable camelcase */
const models = require('./models');

const corn = models.Vegetable.create({
  name: 'corn',
  color: 'yellow',
  planted_on: Date.now(),
}).then(corn => {
  return models.Gardener.create({
    favoriteVegetableId: corn.id,
    name: 'Brynn',
    age: 30,
  })
    .then(brynn => {
      return models.Plot.create({
        gardenerId: brynn.id,
        size: 50,
        shaded: true,
      });
    })
    .then(plot => {
      return corn.addPlot(plot);
    });
});

const kale = models.Vegetable.create({
  name: 'kale',
  color: 'green',
  planted_on: Date.now(),
}).then(kale => {
  return models.Gardener.create({
    favoriteVegetableId: kale.id,
    name: 'Wenyi',
    age: 26,
  })
    .then(wenyi => {
      return models.Plot.create({
        gardenerId: wenyi.id,
        size: 100,
        shaded: true,
      });
    })
    .then(plot => {
      return kale.addPlot(plot);
    });
});

const mushroom = models.Vegetable.create({
  name: 'mushroom',
  color: 'brown',
  planted_on: Date.now(),
}).then(mushroom => {
  return models.Gardener.create({
    favoriteVegetableId: mushroom.id,
    name: 'Corey',
    age: 30,
  })
    .then(corey => {
      return models.Plot.create({
        gardenerId: corey.id,
        size: 200,
        shaded: false,
      });
    })
    .then(plot => {
      return mushroom.addPlot(plot);
    });
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
