import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    nama: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    gambar: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();