
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    host: '157.230.137.133',
    database: 'paradoxy',
    username: 'root',
    password: 'Az@th0th',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false,

});

module.exports.Sequelize = Sequelize;
module.exports.connection = sequelize;
