const Sequelize  = require('sequelize');

const sequelize =  new Sequelize('products', 'root','123456',{
    host: 'localhost',
    dialect: 'mysql'
} );


sequelize.authenticate()
.then(function(){
    console.log("deu bom o banco de dados!!");
}).catch(function(){
    console.log("erro  na conexão com o banco de dados!!");
});


module.exports = sequelize;
