const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init({
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }, 
    description: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false
    }, 
    repo: {
        type: DataTypes.STRING,
        unique: true,
    },
    live: {
        type: DataTypes.STRING,
        unique: true,
    }, 
    tech: {
        type: DataTypes.STRING,
    }, 
    img: {
        type: DataTypes.BLOB,
        unique: true,
    },
    video: {
        type: DataTypes.STRING,
        unique: true,
    }
},{
    sequelize
});

module.exports = Project;