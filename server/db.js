const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookCircle', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to mongo database!');
});

module.exports = db;


//* Sequelizer code */
// const Pool = require('pg').Pool

// const pool = new Pool({
//   user: 'joannakang',
//   host: 'localhost',
//   database: 'bookcircle',
//   port: 5432,
// })

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(pool.database, pool.user, '', {
//   host: pool.host,
//   dialect: 'postgres'
// })

// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;



// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

/*TODO: define schema
//example code
const User = sequelize.define('people', {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.DATE
    }, {
            schema: 'public',
        });

    sequelize.sync()
        .then(() => User.create({
            username: 'MartialDoane',
            email: 'martial-doane@gmail.com',
            birthday: new Date(1977, 6, 11)
        }))
        .then(jane => {
            console.log(jane.toJSON());

            res.send(jane);
            res.status(200);
        });
        */

//FIXME: have tried but not working😥 
// const client = new Client({
//   user: 'joannakang',
//   host: 'localhost',
//   database: 'bookcircle',
//   port: 5432
// })
// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// const sequelize = new sequelize(pool.user, pool.host, pool.database, pool.port);

// const client = new Client()

// pool.sequelize = sequelize;


// module.exports = pool;
