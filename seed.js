const db = require('./models');


db.sync({force:true})
.then(()=>{
    console.log('db sync successfully');
})
.catch(err => console.error(err))
.finally(()=>{
    db.close();
})