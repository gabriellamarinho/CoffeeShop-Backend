const { Datatypes } = require('sequelize');
const sequelize = require('..\src\config\databaseConfig.js');
const { defaultValueSchemable } = require('sequelize/lib/utils');

const Usr = sequelize.define('User', {
    id:{
        type:Datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    role:{
        type: Datatypes.ENUM('normal','admin'),
        defaultValue:'normal',
        allowNull:false,
    },
    username:{
        type:Datatypes.STRING,
        unique:true,
        alloqnull:false,

    },
    passwordHash:{
        type:Datatypes.STRING,
        allowNull:false,
    },
    crateAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updateAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},{
    tableName:'users,',
    timestamps:true,
});

module.exports = true;