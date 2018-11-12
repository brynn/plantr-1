/* eslint-disable camelcase */
const models = require('./models');

const corn = models.Vegetable.create({
  name: 'corn',
  color: 'yellow',
  planted_on: Date.now(),
}).then((corn)=> {
    return models.Gardener.create({
        favoriteVegetableId: corn.id,
        name: 'Brynn',
        age: 30
    });
});

const kale = models.Vegetable.create({
  name: 'kale',
  color: 'green',
  planted_on: Date.now(),
}).then((kale)=> {
    return models.Gardener.create({
        favoriteVegetableId: kale.id,
        name: 'Wenyi',
        age: 26
    })
    .then((wenyi)=>{
      return models.Plot.create({
          gardenerId: wenyi.id,
          size: 100,
          shaded: true,
      })
    });
});

const mushroom = models.Vegetable.create({
  name: 'mushroom',
  color: 'brown',
  planted_on: Date.now(),
}).then((mushroom)=> {
    return models.Gardener.create({
        favoriteVegetableId: mushroom.id,
        name: 'Corey',
        age: 30
    });
});


models.db
//    .sync({ force: true })
  .sync()
  .then(() => {
    console.log('db sync successfully');
  })
  .catch(err => console.error(err))
  .finally(() => {
    models.db.close();
  });
