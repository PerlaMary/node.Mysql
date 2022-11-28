const Sequelize = require('sequelize');
const db = require('./db');

const Usuario = db.define('product',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

Usuario.sync();

module.exports = Usuario;
