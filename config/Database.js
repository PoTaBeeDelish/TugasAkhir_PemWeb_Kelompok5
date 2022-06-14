import {Sequelize} from "sequelize";

const db = new Sequelize('pemweb','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;